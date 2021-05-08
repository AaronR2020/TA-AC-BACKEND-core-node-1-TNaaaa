/* Q. Create a basic server using http's createServer
  - listen for request on port 5000
  - console request and response object
  - do a request using browser on `localhost:5000`
  - check out console for request and response object */
const fs=require('fs');
const url=require('url');
const http=require('http');

server=http.createServer(handleR)
server.listen(5000,()=>{console.log("Listining on 5000");})
function handleR(req,res){
    //console.log(req);
    //console.log(res);
    res.end();
}

  /*Q. create a node server 
  - add listener on port 5100
  - respond with 'My first server in NodeJS' using response object */
server2=http.createServer(handleRe)
server2.listen(5100,()=>{console.log("Listining on 5100");})
function handleRe(req,res){
res.end('My first server in NodeJS');
}
  /* Q. write code to create a node server 
  - add listener on port 5555
  - console request headers
  - respond with content of user-agent from request headers.
*/
server3=http.createServer(handleReq)
server3.listen(5555,()=>{console.log("Listining on port 5555");});
function handleReq(req,res){console.log(req.header);}
/*Q. write code to create a node server 
  - add listener on port 5566
  - console request url and request method
  - return a text response with requested url and method */
server4=http.createServer(handleRequ)
server4.listen(5566,()=>{console.log("post 5566");})
function handleRequ(req,res){
    console.log(req.url);
}

/*Q. write code to create a node server 
  - add listener on port 7000
  - also add a callback function to listener with a console `server listening on port 7000`
  - return entire request headers in response. */
  server5=http.createServer(handleRequ)
  server5.listen(7000,()=>{console.log("post 7000");})
  function handleRequ(req,res){
      //console.log(req);//request header is it .header?> check solution..
  }






  /*
  Q. create a server
  - add a listener on port 3333
  - set status code 202 in response using `res.statusCode`. */

server6=http.createServer(handleReques)
server6.listen(3333,()=>{console.log("PORT: 3333");})
function handleReques(req,res){
res.statusCode=202
res.end()
}




  /*Q. create a server 
  - add a listener on port 8000
  - set appropriate header for html response using `res.setHeader`
  - return an HTML response(`<h3>Welcome to altcampus</h3>`)  */
server7=http.createServer(handleRequest)
server7.listen(8000,()=>{console.log("PORT:8000");})

function handleRequest(req,res){
    res.setHeader("Content-Type",'text/html')
    //res.writeHead('<h2>Welcome to altcampus</h2>')
    res.end(`<h3>Welcome to altcampus</h3>`)
}




  //Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.






  /*Q. create a basic node server
  - add a listener at port 8888
  - add appropriate header for json response
  - send json response({success: true, message: 'Welcome to Nodejs'}) */






  /*Q. create a server
  - add listener on port 5050
  - use postman to do a POST request on index route
  - console to check request method
  - send HTML response i.e. `<h2>posted for first time</h2>` */






  /* Q. create a server and handle 2 different requests
  - add a listener on port 2345
  - handle GET request on '/' route where return your name in plain text in response
  - handle GET request on '/about' route and return your name in h2 as HTML page.
  - add a error handler at last to handle request made on other than above routes with a status code of 404.*/
  





  /* Q. Handle 2 requests on same route with different method
    1. GET on '/users' route where return a simple HTML form with name and email field
    2. POST on '/users' route with a message 'Posted for the second time'.*/






  /* Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

  - parse the  request url using parse method from url module
  - console pathname from parsed url in above step
  - grab url using `req.url`
  - differentiate between `req.url` and `parsedUrl.pathname`
  - grab the email from query params
  - return json response with email from query params*/