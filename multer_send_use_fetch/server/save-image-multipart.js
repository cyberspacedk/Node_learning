const multer  = require('multer'); 
const path = require('path'); 
   
const USER_IMAGE_FOLDER = path.join(__dirname, '../assets/images/');
 

// DATABASE
const mongoose = require("mongoose");  
const uri = 'mongodb+srv://Begemoth:010203@cluster-2-fr33w.mongodb.net/MongooseDB?retryWrites=true'
mongoose.connect( uri, { useNewUrlParser: true }, (err)=> err ? console.log(err) : console.log('CONNECTED'));
 

const userform = new mongoose.Schema({
  email: String,
  userName: String,
  password: String,
  phone: String, 
  age: String,
  file: String
})

const Usermulter = mongoose.model('Usermulter',userform, 'Multer training'); 

 
 
// Применяем настройки передав в multer storage
const upload = multer(USER_IMAGE_FOLDER);
  
const saveImageMultipart = (req, res) => {
   
  const file = req.file;
  const filePath = '/assets/images/' + file.originalname;

  const {email, userName , password ,phone , age }  = req.body;

   const newUser = new Usermulter({ email, userName , password ,phone , age, file: filePath });
    
   newUser.save((err, doc)=> err ? console.log(err) : console.log('CREATED'));
  
};

// добавляем промежуточный обработчик для post-multipart запросов
module.exports = () => [upload.single('file'), saveImageMultipart];