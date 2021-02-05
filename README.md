# DevOps-with-Kubernetes

This repository includes my answers to exercises in DevOps with Kubernetes -course at University of Helsinki.

### Main application
[Main application](https://github.com/outisa/kubernetes-mainApp)

### Todo application
[Todo application](https://github.com/outisa/kubernetes-todo-app)

### PingPong application
[PingPong application](https://github.com/outisa/kubernetes-pingpong)

### DBaaS vs DIY (ex 3.06)
Pros to use DBaaS from Google:
Google cloud promises that it is fully managed. This means that data is secured and scaled by GKE. All the backups, replication, encryption patches, and capacity increases are automated and at the same time (more than 99.95%) availability is ensured. One can monitor database related perfomance with Query Insights without additional costs. The prices for memory and vCPUs are cheaper for longer periods. Well suitable for production because is is maintained and they take care of the security and scalability.

Cons: as always all the services cost money. If DBaaS is used, some PostreSQL or MySQL (or other database version) features or plugins are unsupported.

Pros DYI: One does not have to pay services which you might not need. Also all the database related features should be there for using them. Easy to use for small experiments as in this course. I think these are good for stating environment and environments which might be up only sometimes and for some time. Staging environment might not need scalability and needed storage might stay quite same all the time.

Cons: You have to do everything by yourself. This requires a knowledge about how to do database dumps, scaling and database securing. One would also need solution for storing database dumps. Also these tasks require time to be done. If company does have a couple projects or a large project, maintainig a database(s) and their backups might get time for doing some other development. You have to pay anyway for storage, pvc's and the employee, who does the work. Monitoring might be more difficult.

Commitment (ex 3.07)

I decided to use Postgres with PersistentVolumeClaim because I already have it initialized and I do not have to do any new configurations.
