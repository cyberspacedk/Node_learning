const path = require('path');
const fs = require('fs');

const product = (request, response) => {

  if(request.method === 'GET'){

    const filepath = path.join(__dirname, '../src/db/products.json');
    const file = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
      
    response.writeHead(200, {'Content-Type': 'application/json'}); 
    response.write(JSON.stringify({status:'success', products : file}));
    response.end();
  } 
 
}

module.exports = product;