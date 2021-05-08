/*

Q. Handle 2 requests on same route with different method
    1. GET on '/users' route where return a simple HTML form with name and email field
    2. POST on '/users' route with a message 'Posted for the second time'.

Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browse
  - parse the  request url using parse method from url module
  - console pathname from parsed url in above step
  - grab url using `req.url`
  - differentiate between `req.url` and `parsedUrl.pathname`
  - grab the email from query params
  - return json response with email from query params */

let http = require('http');
let fs = require('fs');

server1=http.createServer(serverOne)
server1.listen(5000,()=>{console.log("Port:5000");})
function serverOne(req,res){
  console.log('This is request object');
  console.log(req);
  console.log('This is response object');
  console.log(res);
}

server2=http.createServer(serverTwo);
server2.listen(5100,()=>{console.log("Port:5100");})
function serverTwo(req,res){
    res.end('My First server in NodeJS');
}


server3=http.createServer(serverThree)
server3.listen(5555,()=>{console.log("Port:5555");})
function serverThree(req,res){
    console.log(req.headers);
    console.log(req.headers['user-agent']);
}


server4=http.createServer(serverFour)
server4.listen(5566,()=>{console.log("Port:5566");})
function serverFour(req,res){
  console.log(req.url, req.method);
  res.end(req.url, req.method);
}


server5=http.createServer(serverFive)
server5.listen(7000,()=>{console.log("Port:7000");})
function serverFive(req,res){
    res.end(req.headers);
}


server6=http.createServer(serverSix)
server6.listen(3333,()=>{console.log("Port:3333");})
function serverSix(req,res){
    res.statusCode = 202;
    res.end();
}


server7=http.createServer(serverSeven)
server7.listen(8000,()=>{console.log("Port:8000");})
function serverSeven(req,res){
    res.setHeader('Content-type', 'text/html');
    res.end(`<h3>Welcome to Altcampus</h3>`);
}


server8=http.createServer(serverEight)
server8.listen(8888,()=>{console.log("Port:8888");})
function serverEight(req,res){
    res.writeHead(200, {
        'Content-type': 'application/json',
      });
      res.end(`{ success: true, message: 'Welcome to Nodejs' }`);
}


server9=http.createServer(serverNine)
server9.listen(5050,()=>{console.log("Port:5050");})
function serverNine(req,res){
    path=res.url
    if(res.method=="POST"&&path=='/index'){
        res.setHeader('Content-type', 'text/html');
        res.end(`<h2>posted for first time</h2>`)
    }
}




server10=http.createServer(serverTen)
server10.listen(2345,()=>{console.log("Port:2345");})
function serverTen(req,res){
    if(res.method=="GET"&&path=='/'){
        res.setHeader('Content-type', 'text/plain');
        res.end(`<h2>posted for first time</h2>`)
    }
    else if(res.method=="GET"&&path=='/about'){
        res.setHeader('Content-type', 'text/html');
        res.end(`<h2>posted for first time</h2>`)
    }
}


server11=http.createServer(serverEleven)
server11.listen(3000,()=>{console.log("Port:3000");})
function serverEleven(req,res){
    res.end()//?
}


server12=http.createServer(serverTwelve)
server12.listen(4000,()=>{console.log("Port:4000");})
function serverTwelve(req,res){
    res.end()//?
}


