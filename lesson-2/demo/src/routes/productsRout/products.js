const express = require('express');
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../../../data/products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath));

const router = express.Router();



router.get('/',(req,res)=> {  
  res.send('Main')
});

router.get("/:id", (req,res)=> {  
const id = req.params.id;
console.log(id);
res.send("DYNAMIC")

})


module.exports = router;