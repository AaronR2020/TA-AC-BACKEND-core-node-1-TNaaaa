const http=require('http')
server=http.createServer(handleRequest);
server.listen(4444,()=>{console.log("listining on port 4444")})
function handleRequest(req,resp){
resp.statusCode=201;
console.log(resp.headers);
resp.end("End of respose")
}