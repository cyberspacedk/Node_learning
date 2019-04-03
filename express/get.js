const express = require('express');
const app = express();
 

app.get('/', (req,res)=>{
  console.log(req.url);
  res.send('<h2>This is SPARTA</h2>')
})
app.get('/shop', (req,res)=>{
  console.log(req.url);
  res.send('<h2>This is SHOP</h2>')
})
app.get('/cart', (req,res)=>{
  console.log(req.url);
  res.send('<h2>This is CART</h2>')
})

app.listen(3000);