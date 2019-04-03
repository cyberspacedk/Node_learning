const express = require('express');
const app = express();

app.listen(3000, ()=>console.log('START EXPRESS'))

app.get('/', (req,res)=>{
  console.log(req.url);
  res.send('<h2>This is SPARTA</h2>')
})