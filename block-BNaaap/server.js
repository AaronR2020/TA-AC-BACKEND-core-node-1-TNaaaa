const http=require('http')
server=http.createServer(handleRequest);
server.listen(4444,()=>{console.log("listining on port 4444")})
function handleRequest(req,resp){
resp.statusCode=201;
resp.writeHead(201,{'Content-Type':'text/html'})
resp.end("<h2>End of respose</h2>")
}