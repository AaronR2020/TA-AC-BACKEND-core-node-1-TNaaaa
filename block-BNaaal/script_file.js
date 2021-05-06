const http=require('http');
var server=http.createServer(handleRequest)
server.listen(4000,()=>{console.log("Server listening at port 4000");});

function handleRequest(request,response){
    response.end("This is a response from a server");
}