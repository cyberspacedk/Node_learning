const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/youtube', { useNewUrlParser: true })
  .then(()=> console.log("START"))
  .catch(err=> console.log(err)) 

require('./model/Person');

const Person = mongoose.model('persons');

const person = new Person({
  name:'Semen',
  age:19,
  phones:[123312,23455]
})

Person.find({}).then(pers=>console.log(pers))
const a= [{name:'Yra', age:33}, {name:'Oleg', age:100}];
a.forEach(p=>{
  return new Person(p).save();
})


// person.save().then(person=>console.log(person)).catch(e=>console.log(e))