const http=require('http');
const url=require('url');
server=http.createServer(handleRequest);
server.listen(5000,()=>{console.log("listining on port 5000");})


function handleRequest(req,res){
    pathname=url.parse(req.url).pathname
    if(req.method=='GET'&&pathname=='/'){
        res.end("Welcome to homepage")
    } else if(req.method=='GET'&&pathname=='/about'){
        res.end("this is all about NodeJS")
    }else if(req.method=='POST'&&pathname=='/about'){
        res.end({'message':"this is all about NodeJS"})
    }
}