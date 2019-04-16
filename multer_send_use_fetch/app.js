const express = require('express');
const cors = require('cors');
const app = express();

const multer = require('multer');


// middleware
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req,res)=>{
    res.send('WORK')
})


app.listen(7000, ()=> console.log('SERVSER START'))