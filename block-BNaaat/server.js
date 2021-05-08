const http=require('http');
const fs=require('fs');
const url=require('url');
server=http.createServer(handleRequest);
server.listen(5555,()=>{console.log("listining on port 5555");})


function handleRequest(req,res){
    pathname=url.parse(req.url).pathname
    if(req.method=='GET'&&pathname=='/'){
        res.end("Welcome to homepage")
    } else if(req.method=='GET'&&pathname=='/file'){
        res.setHeader('Content-Type',"text/html")
        fs.readFile('./node.html',(e,c)=>{if(e)console.log(e);else res.end(c)})
    } else if(req.method=='GET'&&pathname=='/stream'){
        res.setHeader('Content-Type',"text/html")
        fs.createReadStream('./node.html').pipe(res)
    }
}