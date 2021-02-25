const JSONStream = require('json-stream')
const request = require('request')
const k8s = require('@kubernetes/client-node')

const kc = new k8s.KubeConfig()
kc.loadFromDefault()


const ks8ApiDep = kc.makeApiClient(k8s.AppsV1Api)
const k8sApi = kc.makeApiClient(k8s.CoreV1Api)
const k8sApiNetworking = kc.makeApiClient(k8s.NetworkingV1beta1Api)

// The idea of next three lines and the const watchForDummysite are from app example
// https://github.com/kubernetes-hy/material-example/tree/master/app10
const opts = {}
kc.applyToRequest(opts)
const sendRequestToApi = async (api, method = 'get', options = {}) => new Promise((resolve, reject) => request[method](`${kc.getCurrentCluster().server}${api}`, {...opts, ...options, headers: { ...options.headers, ...opts.headers }}, (err, res) => err ? reject(err) : resolve(JSON.parse(res.body))))

const watchForDummysite = async() => {
  const dummy_stream = new JSONStream()

  dummy_stream.on('data', async ({ type, object }) => {
    const dummyobject = fieldsFromDummySite(object)
    console.log(dummyobject)
    if (type === 'ADDED') {
      if (! await IngressExists(dummyobject)) createIngress(dummyobject)    
      if (! await ServiceExists(dummyobject)) createService(dummyobject)
      if (! await DeploymentExists(dummyobject)) createDep(dummyobject)  
    }
  })

  request.get(`${kc.getCurrentCluster().server}/apis/mycrd.dwk/v1/dummysites?watch=true`, opts).pipe(dummy_stream)
}

const IngressExists = async (dummyobject) => {
  const { dummysite_name, namespace } = dummyobject
  const { items } = await sendRequestToApi(`/apis/batch/v1/namespaces/${namespace}/ingresses`)
  if (!items) return false
  return items.find(item => item.metadata.name === `${dummysite_name}-ing`)
}

const ServiceExists = async (dummyobject) => {
  const { namespace } = dummyobject
  const { items } = await sendRequestToApi(`/apis/batch/v1/namespaces/${namespace}/services`)
  if (!items) return false
  return items.find(item => item.metadata.name === 'dummysite-svc')
}

const DeploymentExists = async (dummyobject) => {
  const { dummysite_name, namespace } = dummyobject
  const { items } = await sendRequestToApi(`/apis/batch/v1/namespaces/${namespace}/deployments`)
  if (!items) return false
  return items.find(item => item.metadata.name === dummysite_name)
}

const fieldsFromDummySite = (object) => ({
  dummysite_name: object.metadata.name,
  container_name: object.metadata.name,
  namespace: object.metadata.namespace,
  website_url: object.spec.website_url,
  image: object.spec.image,
})

const createService = (dummyobject) => {
  k8sApi.createNamespacedService(`${dummyobject.namespace}`, {
    apiVersions: 'v1',
    kind: 'Service',
    metadata: {
      name: 'dummysite-svc',
    },  
    spec: {
      type: 'ClusterIP',
      selector: {
        app: `${dummyobject.dummysite_name}`
      },  
      ports: [{
        port: 2345,
        protocol: 'TCP',
        targetPort: 5000,
      }]
    }
  }).catch(e => console.log(e))
}

const createIngress = (dummyobject) => {
  const host = dummyobject.website_url.substring(8)
  console.log(host)

  k8sApiNetworking.createNamespacedIngress(`${dummyobject.namespace}`, {
    apiVersion: 'networking.k8s.io/v1beta1',
    kind: 'Ingress',
    metadata: { name: `${dummyobject.dummysite_name}-ing` },
    spec: {
      rules: [{
        http: {
          paths: [{
            backend: {
              serviceName: 'dummysite-svc',
              servicePort: 2345
            },  
            path: '/',
          }]
        }
      }]
    }
  }).catch(e => console.log(e))  
}

const createDep = async (dummyobject) => {
  console.log('creating pod')
  ks8ApiDep.createNamespacedDeployment(`${dummyobject.namespace}`, {
    apiVersion: 'apps/v1',
    kind: 'Deployment',
    metadata: {
      name: `${dummyobject.dummysite_name}`,
      namespace: `${dummyobject.namespace}`
    },
    spec: {
      replicas: 1,
      selector: {
        matchLabels: {
          app: `${dummyobject.dummysite_name}`
        }
      },  
      template: {
        metadata: {
          labels: {
            app: `${dummyobject.dummysite_name}`
          }
        },      
        spec: {
          containers: [{
          name: `${dummyobject.container_name}`,
          image: `${dummyobject.image}`,
          env: [{
            name: 'WEBSITE_URL',
            value: `${dummyobject.website_url}`
           }]
          }]
        }
      }    
    }
  })
}

watchForDummysite()