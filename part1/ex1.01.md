source code for the 'main application' can be found at
[main application](https://github.com/outisa/kubernetes-mainApp)

commands run:
```
$ kubectl create deployment hashgenerator-dep --image=outisa/main-application
deployment.apps/hashgenerator-dep created
$ kubectl get deployments
NAME                READY   UP-TO-DATE   AVAILABLE   AGE
hashgenerator-dep   1/1     1            1           35s
$ kubectl get pods
NAME                                READY   STATUS    RESTARTS   AGE
hashgenerator-dep-8cf8ddf7c-4b8hn   1/1     Running   0          54s
$ kubectl logs -f hashgenerator-dep-8cf8ddf7c-4b8hn

> hashgenerator@1.0.0 start
> node index.js

2021-1-14T15:30:43:638Z: qi5s38r2a7g-r23g5wya1e8-bba83a5a94903a5
2021-1-14T15:30:43:638Z: qi5s38r2a7g-r23g5wya1e8-bba83a5a94903a5
2021-1-14T15:30:43:638Z: qi5s38r2a7g-r23g5wya1e8-bba83a5a94903a5
...
```
