I tested this only with email address https://example.com. This is constructed so, that it can create just one ingress.yaml, service.yaml and deployment.yaml. 
Some betterments would be, that if the dummysite object is deleted, then all the related yaml files should also be deleted. However, this  workflow works
1. apply role, account and binding. (I applied also resourcedefinition.yaml...) 2. apply deployment. 3. apply DummySite
