const express = require('express');
const app = express();

const productrouter = require('./routes/productsRout/products.js');

const startServer = port => {

  app.get('/', (req,res)=>{
    res.send('START')
  });

  app.use('/products', productrouter);
    
  app.listen(port, (req,res)=>{
    console.log('SITE work on port ', port);
  })
}


module.exports = startServer;