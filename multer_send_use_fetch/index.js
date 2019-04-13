const express = require('express');
const logger = require('morgan');

const cors = require('cors');
const saveUserDataMulti = require('./server/save-image-multipart'); 
 


// SERVER
const app = express();

app.use(logger('combined'));
app.use(cors());
app.use(express.json());

// routes
app.post('/users' , saveUserDataMulti())

app.get('/', (req,res)=> {
  res.send('START')
})

// start server
app.listen(7000, (err)=> err ? console.log(err) : console.log('SERVER START ON PORT 7000'));
