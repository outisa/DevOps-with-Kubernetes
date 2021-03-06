Exercise 5.02:

[App now](https://github.com/outisa/kubernetes-todo-app/tree/1c87cdb410ecf691963ffb4b13be6ee441ca5b80) with linknerd injection in the deployment.yamls. I also fixed one image related error, which could exist when there is no image yet. I thought I had fixed it already, but the same error occured today after deleting the cluster and by recreating a new one.

I got a huge issue with added linknerd injection. Nats did not connected anymore after that or better said connection closed before anything happened. However, as I removed injection from the deployments all got as it was. This might be due the disk pressure or alike. So I removed the injection annotation after this exercise.

I was not happy with how it went yesterday with this exercise. So I came back to it.  I added linknerd sidecar and created new linkerddeployment.yaml files for it. And I did not do that to the broadcaster in the final version as this prevented somehow the messaging between the broadcaster and the app. It caused app to freeze because of some connections errors. Messaging was working as wanted, if I had only linkerd injected to backend and frontend. 

[The final version of todo app](https://github.com/outisa/kubernetes-todo-app)

Exercise 5.04:

I am comparing Rancher and OpenShift. Both offers great stuff und promises easy way to do everything. I would choose Rancher for now as it:

* It is free to use also in production. OpenShift has only free tiers to development and testing.
* One need only from couple of ten minutes to the couple of hours install Rancher. However, it can take days to install Openshift completely. (May be old information)
* I got a feeling that OpenShift were more like a service for bigger enterprises. That might be only illusion. However, I got a feeling that Rancher is more suitable to hobbu developer as it is free of charce. 
* In OpenShift desicions are made for you so you have limited options to use. By using Rancher one does decisions by oneself.
* Because of the previous point, you learn much more by using Rancher.
* Rancher offers online training.
* OpenShift can build images for you from the source code. I do not like this beacuse I get the feeling that I would not know how this is done. I can undestand that for some compnies or people this is a good solution.
* I liked Rancher websites than OpenShift.

Exercise 5.05

[pingpong-app](https://github.com/outisa/kubernetes-pingpong)

I tested this with busybox
```
$ kubectl exec -it busybox1 -- wget -qO - pingpong-app.default.svc.cluster.local/pingpong
{"counts":8}
$ kubectl exec -it busybox1 -- wget -qO - pingpong-app.default.svc.cluster.local/pingpong
{"counts":9}
$ kubectl exec -it busybox1 -- wget -qO - pingpong-app.default.svc.cluster.local/pingpong 
{"counts":10}
Here was some break and the next command took a while because the pingpong pod needed to be created again.
$ kubectl exec -it busybox1 -- wget -qO - pingpong-app.default.svc.cluster.local/pingpong 
{"counts":11}
$ kubectl get po
NAME                                          READY   STATUS    RESTARTS   AGE
postgres-ss-0                                 1/1     Running   0          56m
busybox1                                      1/1     Running   1          91m
pingpong-app-v1-deployment-7b6bcd7769-4xnqr   2/2     Running   0          45s
$ kubectl get ksvc
NAME           URL                                       LATESTCREATED     LATESTREADY       READY   REASON
pingpong-app   http://pingpong-app.default.example.com   pingpong-app-v1   pingpong-app-v1   True    
``` 

Exercise 5.06

I have used somewhere else:

1. MongoDB
2. MySQL
3. circleci
4. IBM-storage
5. heroku
6. Red Hat OpenShift
7. Redis

Used on the course
1. Postresql part 1 onward to store pongs, todos and images.
3. NATS to messaging between services in part 4.
4. Bitnami from part 2 onwards to encrypt secrets.
5. HELM for inatalling prometheus and linkerd.
6. Prometheus to monitor the cluster.
7. Grafana to see the data prometheus provides from the dashboard in part 2 and 4.
8. Grafana-loki part 2 also see the data for example from particular pod.
9. Argo-rollouts for canary releases and rollouts in part 4.
10. Linkerd to see metrics in the injected deployments in part 5.
11. Knative to use cluster serverless.
12. Google kubernetes engine in part 3.
13. Github action in all part to automate the deployment. Made changes in parts 3 and 4 to make releases from the chages in the repo and to deploy those automatically to the cluster.
14. Flux in part 4 to "see" the changes and to add them to the cluster.
15. Contour service proxy in part 5 exercise 5.
16. Nginx in part 3 to get ingresses to work.
17. Docker for making images from the applications.
18. Containerd k3s needs this. What it does, I have not yet really figured out.
19. Flannel k3s needs this. What it does, no idea.
20. CoreDNS k3s uses this for coordination and service discovery, I belive.
21. Trafik-proxy as default ingress controller. 
22. Etcd kubernetes uses this to save all cluster data into it.
23. Kubernetes to get kubectl and things done in this course
24. Rancher to install k3s

Not sure if I picked everything even though I went image through couple of times. Some dependencies might also have been unseen.
