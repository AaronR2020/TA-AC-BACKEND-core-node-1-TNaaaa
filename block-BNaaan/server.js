const http=require('http');

var server=http.createServer(handleRequest)

server.listen(3000,()=>{console.log("listining on port 3000")})

function handleRequest(request,response){
console.log(request.header);
console.log(request.method);
console.log(request.url);
}