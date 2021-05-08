let http = require('http');
let fs = require('fs');

let server = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url === '/') {
    fs.readFile('./index.html', (error, content) => {
      if (error) {
        console.log(error);
      } else {
        res.end(content);
      }
    });
  } else if (req.url === '/about') {
    fs.readFile('./about.html', (error, content) => {
      if (error) {
        console.log(error);
      } else {
        res.end(content);
      }
    });
  }
}

server.listen(4000, () => {
  console.log('Port:4000');
});