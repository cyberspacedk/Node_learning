const express = require('express');
const http = require('http');


const app = express();

const startServer = port => {


app.get('*', (req,res)=>{
  res.send('GO')
})


  app.listen(port, ()=>{
    console.log('Server start at port ', port);
  })
}

module.exports = startServer;