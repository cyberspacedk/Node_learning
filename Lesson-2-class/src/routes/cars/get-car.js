const url = require("url");
const path = require("path");
const fs = require("fs");


const getId = url => {
  const lastIdx = url.lastIndexOf('/');
  if(lastIdx !== -1){
    const id = url.slice(lastIdx+1);
    return id !== 'cars' ? id : null;
  }
}

const multiplyId = (query, arr)=>{
  // разбиваем строку по зяпятой и получаем массив чисел/id
  const queryArr = query.split(',');
  // берем исходный массив и фильтруем его по наличию в нем id таких как в массиве который мы получили из строки
  return arr.filter(car=> queryArr.includes(car.id))
}

const filterById = (id , arr)=> arr.find(el=> el.id === id) || arr; 
 

const getCars = (request, response) => {

  // console.log('PARSED-URL \n\n\n', url.parse(request.url).path);

  // парсим url чтобы узнать какой  запрос путь, 
  // второй параметр true сделает объект из строки
  const parsedUrl = url.parse(request.url, true);


  const id = getId(parsedUrl.path);

  const filePath = path.join(__dirname, "../../", "db", "cars.json");
  // console.log('PATH \n\n',path.join(__dirname, "../../", "db", "cars.json"));
  const fileData = JSON.parse(fs.readFileSync(filePath));
//  console.log('FILE SYSTEM \n\n', JSON.stringify(fs.readFileSync(filePath)));
  let filteredCars;
 
  response.writeHead(200, { "Content-Type": "application/json" });

  if(!id) {
    response.write(JSON.stringify({ status: "success", cars: fileData.cars })); 
  }
  else if(parsedUrl.search){

    const queryParams = parsedUrl.query.ids.trim().replace(/"/g, '').replace(/'/,''); 
    const carsByids = multiplyId(queryParams,fileData.cars);
    response.write(JSON.stringify({ status: "success", cars: carsByids }));  

  }
  else {
    filteredCars = filterById(id, fileData.cars);
    response.write(JSON.stringify({ status: "success", cars: filteredCars }));  
  }
   
  response.end();
};

module.exports = getCars;
