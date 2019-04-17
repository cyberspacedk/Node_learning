const express = require('express');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
 
const app = express();

// объект настроек для multer
const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function(req, file, cb){
       cb(null, `image-${Date.now()}${path.extname(file.originalname)}`);
    }
 });
 
 const upload = multer({
    storage: storage,
    limits:{fileSize: 10000000},
 });

// middleware
app.use(cors());
app.use(express.json()); 

// обрабатываем роут , вызываем upload.single в который передаем значение атрибута name инпута
app.post("/upload", upload.single("mediafile"), (req, res) => { 
       res.send(200).json({success: true, message: 'File available on path http://host/upload/filename'});
    })
// отдаем картинки. НЕ забыть указывать имя файла
app.get('/upload', express.static('./public/uploads'));  

app.get('/', (req,res)=>{
    res.send('WORK')
})
 
app.listen(7000, ()=> console.log('SERVER START on port 7000'))