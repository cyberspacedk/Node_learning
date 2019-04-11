const express = require('express');
const app = express();
// modules
const path = require('path');
const fs = require('fs'); 
const logger = require('morgan');
// source
const router = require('./routes/router'); 
const staticPath = path.join(__dirname, '../client')
const audioPath = path.join(__dirname, '../assets/audio');
const videoPath = path.join(__dirname, '../assets/video');


// start
const startServer = port => {
// middleware
  app.use(logger('tiny'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true })); 

// routes
  app.use('/assets/audio', express.static(audioPath));
  app.use('/assets/video', express.static(videoPath));
  app.get('/api', router);
  app.use('/', express.static(staticPath));
   



// launch server
  app.listen(port, () => console.log('SERVER start at port', port));
}
// export to index
module.exports = startServer;