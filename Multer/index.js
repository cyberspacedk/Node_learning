const express = require('express');
const multer = require('multer'); 

const path = require('path');

// for image name
let counter =1;

// Set Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req,file,cb){
    cb(null, `${file.fieldname}-${counter++}${path.extname(file.originalname)}`)
  }
})

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 1000000
  }
 }).single('pic');

const app = express();
const port =3000; 

// Public folder where located neccesary files for showing website
app.use(express.static('./public/'));
 
// обрабатываем отправку форму POST
app.post('/uploads', (req,res)=>{

  upload(req, res, (err)=>{
    (err) ? res.send('<h2 style="background-color: red;"> increased limit size</h2>')
    :res.send('<h2 style="background-color: green;"> Image added </h2>');  
  });
})


app.listen(port, ()=> console.log('Server on port', port));