const express = require('express');
const app = express();
const path = require('path');

const productrouter = require('./routes/productsRout/products.js');



const startServer = port => {

  // app.get('/', (req,res)=>{
  // res.sendFile(path.join(__dirname, '../assets/index.html')) 
  // });

  app.use('/', express.static(path.join(__dirname, '../assets/')));
  
  app.use('/product/', productrouter);

  
  app.listen(port, (req,res)=>{
    console.log('SITE work on port ', port);
  })

}


module.exports = startServer;