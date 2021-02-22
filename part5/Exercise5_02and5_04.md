Exercise 5.02:

[App now](https://github.com/outisa/kubernetes-todo-app/tree/1c87cdb410ecf691963ffb4b13be6ee441ca5b80) with linknerd injection in the deployment.yamls. I also fixed one image related error, which could exist when there is no image yet. I thought I had fixed it already, but the same error occured today after deleting the cluster and by recreating a new one.

I got a huge issue with added linknerd injection. Nats did not connected anymore after that or better said connection closed before anything happened. However, as I removed injection from the deployments all got as it was. This might be due the disk pressure or alike. So I removed the injection annotation after this exercise.

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



