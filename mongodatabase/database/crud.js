// const MongoClient = require('mongodb').MongoClient; 

// // идентификатор поделючения к БД
// const uri = "mongodb+srv://Begemoth:010203@cluster-2-fr33w.mongodb.net/test?retryWrites=true";

// // создаем подключение
// const client = new MongoClient(uri, { useNewUrlParser: true });

// // подключаемся используя метод CONNECT
// client.connect( async err => { 

// // обрабатываем статус подключения
//   (err) ? console.log(err) :  console.log('CONNECTION SUCCESS'); 

// // ссылка на базу данных 
//   const db = client.db("Customers");
// // ссылка на коллекцию  
//   const userCollection = db.collection("users");

// ------------  C R U D  ------------

// ДОБАВИТЬ ОДИН ---- CREATE
  // userCollection.insertOne({name:'SSY'} ,()=> console.log('CREATE ONE'));

// ДОБАВИТЬ МНОЖЕСТВО ---- CREATE
  // userCollection.insertMany([{age: 44, alive: true}, {role:'tank', position: 2}], ()=>console.log('CREATE MANY'));

// НАЙТИ ---- READ
  // const all = await userCollection.find().toArray();
  // const one = await userCollection.findOne({name: 'Y'});
  // const concrete = await userCollection.find({role: 'tank'}).toArray(); 
   
// ОБНОВЛЕНИЕ  ---- UPDATE
  // userCollection.updateOne({name:'Y'}, {$set:{name:'ZZZZ'}});
  // userCollection.updateMany({name:'SSY'}, {$set:{lastname:'ADD-new-prop'}});
  // userCollection.updateMany({name:'SSY'}, {$set:{name:'CHANGED-old-name'}});
  // const updated = await userCollection.findOneAndUpdate({name: 'CHANGED-old-name'},{$set:{lastname:'retOr'}}, {returnOriginal:false});
   
// УДАЛЕНИЕ  ----  DELETE
  // userCollection.deleteOne({name: "CHANGED-old-name"});
  // userCollection.deleteMany({name: "CHANGED-old-name"});
  // const deleted = await userCollection.findOneAndDelete({name: "SSY"});
  //  userCollection.drop();

//   client.close();

// }); 