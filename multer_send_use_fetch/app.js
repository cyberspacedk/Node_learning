const express = require('express');
const cors = require('cors');
const app = express();

// ---------------------------------------------------
const multer = require('multer');


app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('WORK')
})


app.listen(7000, ()=> console.log('SERVSER START'))