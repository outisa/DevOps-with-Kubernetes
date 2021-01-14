Todo application can be found [here](https://github.com/outisa/kubernetes-todo-app)

Commands run:

```
$ kubectl create deployment todo-dep --image=outisa/todo-application
deployment.apps/todo-dep created
$ kubectl get pods
NAME                                READY   STATUS    RESTARTS   AGE
todo-dep-7fb757c86d-knmkq           1/1     Running   0          2m9s
hashgenerator-dep-8cf8ddf7c-wb6bq   1/1     Running   0          18s
$ kubectl get deployments
NAME                READY   UP-TO-DATE   AVAILABLE   AGE
todo-dep            1/1     1            1           2m15s
hashgenerator-dep   1/1     1            1           24s
ousavola@lx8-fuxi140:~/todo-app$ kubectl logs todo-dep-7fb757c86d-knmkq 

> todo-app@1.0.0 start
> node index.js

Server started in port 3001
```
