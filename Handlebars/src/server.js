const express = require('express')
const exphbs  = require('express-handlebars'); 
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const startServer = port => { 
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=>{
  console.log('server start at port ' , port); 
  res.render('home');  
})

app.get('/about', (req,res)=>{
  res.render('about')
})
  
app.listen(port)
}

module.exports = startServer;