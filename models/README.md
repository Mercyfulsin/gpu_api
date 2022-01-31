* Models *

Using the Mongoose ODM to interact with our MongoDB Cluster. Models are used as a reference to how an object looks in the database. First you create a schema which would be all the properties of the object (ie: name, cost, stats, etc). Then we convert it to a model and export it to be used by the controller,