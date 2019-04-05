const express = require('express');
const bodyParser = require('body-parser');

const fs = require('fs');
const path = require('path');

const app = express();

// путь к папке 
const userDb = path.join(__dirname, '../db'); 
// путь к файлу
const userFileDb = path.join(__dirname, '../db/users.json'); 
// получим файл 
const userFile = JSON.parse(fs.readFileSync(userFileDb, 'utf-8'));

const startServer = port => { 

app.use(bodyParser.json());


app.all('/', (req,res)=>{
  debugger;
  res.send('MAIN')
})

//  ДОБАВЛЕНИЕ НОВОГО JSON.  
app.post('/user', (req,res)=>{ 
  const body = req.body; 
  if(body && body.userName){ 
    // параметры - 1 - путь+отличительное имя файла 2-тело файла. ЧТО записать
    fs.writeFileSync(`${userDb}/${body.userName}.json`, JSON.stringify(body));
  }
});
  // ДОБАВЛЕНИЕ В СУЩЕСТВУЮЩИЙ  JSON 
  app.post('/adduser', (req,res)=>{ 
    const body = req.body; 
    if(body && body.userName){ 
      // создадим промежуточный массив, распылив в него старый 
      const newData = [...userFile.users, body];
      fs.writeFileSync(`${userDb}/users.json`, JSON.stringify({users: newData}));
    } 
  res.send(req.body);
})

// ОБНОВЛЯЕМ user JSON
  app.put('/user/:id', (req,res)=> {
    const userId = req.params.id; 
    const body = req.body;

    const updatedUser = userFile.users.map(el=> el.uid == userId ? {...el,body}: el);
    fs.writeFileSync(`${userDb}/users.json`, JSON.stringify({users: updatedUser}));

    res.send(req.body); 
  })

  // УДАЛЯЕМ конкретного USERa из  JSON
  app.delete('/removeuser/:id',(req,res)=>{
    const userId = req.params.id; 
    const deletedUser = userFile.users.find(el=> el.uid == userId);
    const filteredUsers = userFile.users.filter(el=> el.uid != userId);
    fs.writeFileSync(`${userDb}/users.json`, JSON.stringify({users: filteredUsers}));
    res.send(deletedUser); 
  })

  // УДАЛЯЕМ файл из директори
  app.get('/removefile/:name', (req, res)=>{
    const nameToDelete = req.params.name;  
    fs.unlink(`${userDb}/${nameToDelete}.json`, (err)=>{
      if (err) throw err;
      console.log("DELETED");
    })
    res.send(`File with user ${nameToDelete} was deleted`);
  })
 
  app.listen(port, ()=>{
    console.log('Start at port', port);
  })
}

module.exports = startServer;