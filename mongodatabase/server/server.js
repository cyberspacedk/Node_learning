const express = require('express'); 
const app = express();

const mongoose = require("mongoose");  
const uri = 'mongodb+srv://Begemoth:010203@cluster-2-fr33w.mongodb.net/MongooseDB?retryWrites=true'
mongoose.connect( uri, { useNewUrlParser: true }, (err)=> err ? console.log(err) : console.log('CONNECTED'));
 

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
  tel: Number, 
})

// если передать третий параметр, то это будет название нового документа
const User = mongoose.model('User', userSchema, 'AnotherCollection'); 

// server
const startServer = port => { 
  app.use(express.json());  

  app.post('/', (req,res)=>{
   const {name,email,password,tel} = req.body;

   const newUser = new User({
    name,
    email,
    password,
    tel 
   });
   newUser.save((err, doc)=> err ? console.log(err) : console.log('CREATED'));  
   res.send('CREATED'); 
  })
  

// OPERATION 

  // получаем по ID
  app.get('/:id', (req,res)=>{
    const id = req.params.id;
    User.findById(id).exec((err,doc)=> err ? console.log(err) : res.send(doc))
  })
  // получаем ВСЕХ
  app.get('/' , (req,res)=>{
    User.find({} , (err, doc)=> err ? console.log(err) : res.send(doc)); 
  }); 







  app.listen(port, ()=>{
    console.log('Server Start at port', port);
  })
} 
module.exports = startServer;