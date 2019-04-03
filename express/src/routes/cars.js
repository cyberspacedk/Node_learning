const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../db/cars.json');
const fileData = JSON.parse(fs.readFileSync(filePath));

const filterById = (id, arr) => arr.filter(car => car.id == id);  

// получаем id из параметров запроса
const getQuery = query =>  query.trim().replace(/["']/g, '').split(','); 

// фильруем массив по параметрам 
const filterCarsByQuery = (query, arr) => arr.filter(el=> query.includes(el.id));


router.get('/', (req,res)=>{

  const query = req.query;  
  // если параметры существуют то 
  if(query.ids){  

    const id = getQuery(query.ids);

    const filteredCars = filterCarsByQuery(id, fileData.cars);
    console.log(id[0]);

    res.status(200).send({status: "success", cars: filteredCars });
// если параметров нет то возвращаем весь массив 
  }else{ 
    res.status(200).send({status: "success", cars:fileData })
  }
 
})

router.get('/:id', (req,res)=>{
   
  const id = req.params.id;
  const carsArr = fileData.cars;  
  const carsById = filterById(id, carsArr);
 
  res.status(200).json(carsById)
})

 
module.exports = router;