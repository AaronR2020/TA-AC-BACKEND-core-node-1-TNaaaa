var fs=require('fs');
fs.readFileSync('./content.md',(e,c)=>{console.log("sync",c.toString())})
fs.readFile('./content.md',(e,c)=>{console.log("Async",c.toString())});
var buff1=Buffer.alloc("hello")
console.log("welcome to buffer:",buff1);
