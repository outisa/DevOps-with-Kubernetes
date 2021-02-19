Exercise 4.01

I changed some configurations back as they were at part 2. Like Nodeport back to ClusterIP and I added StorageClassName into persistent volume claims.

[Pingpong-app](https://github.com/outisa/kubernetes-pingpong/tree/85198165d9ead851b9c0c77b1c60db9897b0793e)

[Main app](https://github.com/outisa/kubernetes-mainApp/tree/b70845d781300e317e50df4587747255c8de4742)

Exercise 4.02

I made same kind of changes as in previous exercise.

[Todo-app](https://github.com/outisa/kubernetes-todo-app/tree/f9667ef7af0acaaefe9ea89eac9db544a24da8f4)

Exercise 4.04

[rollout](https://github.com/outisa/kubernetes-todo-app/blob/master/backend-conf/manifests/rollout.yaml) and [analysistemplate](https://github.com/outisa/kubernetes-todo-app/blob/master/backend-conf/manifests/analysistemplate.yaml)

Exercise 4.05 and exercise 4.06

I added also deleting a todo and some styles on the pages.

[todo-app at this moment](https://github.com/outisa/kubernetes-todo-app/tree/a8b6bf07b0b91f99e81bce99228412cebfb4a372)

[broadcaster](https://github.com/outisa/kubernetes-todo-app/tree/a8b6bf07b0b91f99e81bce99228412cebfb4a372/broadcaster)

Exercise 4.07 and 4.08

This requires that namespace todo-app is already created, otherwise error occured. I managed secrets by applying bitnami first on the kubernetes. I sealed secrets and applied them to kustomizatio.yaml. This felt the right way to do it at least now.

[main.yaml](https://github.com/outisa/kubernetes-todo-app/blob/master/.github/workflows/main.yaml)

[kube-cluster-dwk](https://github.com/outisa/kube-cluster-dwk)
