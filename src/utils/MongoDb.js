import mongoose from "mongoose";

const uri =
  "mongodb://segiuri:<password>@ac-lorbvrq-shard-00-00.05uzocf.mongodb.net:27017,ac-lorbvrq-shard-00-01.05uzocf.mongodb.net:27017,ac-lorbvrq-shard-00-02.05uzocf.mongodb.net:27017/?ssl=true&replicaSet=atlas-l16i86-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function (err, client) {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect("mongodb://localhost/your_database_name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
