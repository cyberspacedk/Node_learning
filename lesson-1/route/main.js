

const main = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<h1>Main route</h1>');
  response.end();
}

module.exports = main;