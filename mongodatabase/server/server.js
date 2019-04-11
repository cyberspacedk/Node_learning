const express = require('express');

const app = express();
 
const startServer = port => {
 
  app.send('START'); 

  app.listen(port, ()=>{
    console.log('Server Start at port', port);
  })
}


module.exports = startServer;