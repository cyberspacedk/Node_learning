const products = require('./products.js');
const main = require('./main.js');
const signUp = require('./signUp.js');

const route = {
   main: main,
  "/products" : products,
  "/users" : signUp, 
}

module.exports = route;