const MongoClient = require('mongodb').MongoClient;  
const uri = "mongodb+srv://Begemoth:010203@cluster-2-fr33w.mongodb.net/test?retryWrites=true";
 
const client = new MongoClient(uri, { useNewUrlParser: true });
 
client.connect( async err => {  
  (err) ? console.log(err) :  console.log('CONNECTION SUCCESS'); 

  const db = client.db("Customers"); 
  const userCollection = db.collection("users");
 

  client.close();

}); 