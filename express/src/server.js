const express = require('express');
const bodyParse = require('body-parser');
const logger = require('morgan');

const app = express();
const carsRouter = require('./routes/cars.js');


const startServer = port => {
 
  app.get('/', (req,res)=>{
    res.send('hello world');
  });

  app.use('/cars', carsRouter);

  app.listen(port, ()=>{
    return console.log('Server start at port', port );
  })
}

module.exports = startServer;