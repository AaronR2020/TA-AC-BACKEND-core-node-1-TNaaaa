var fs=require('fs');
console.log("Sync:",fs.readFileSync('./content.md').toString())

fs.readFile('./content.md',(e,c)=>{console.log("Async",c.toString())});

var buff1=Buffer.alloc(10)
buff1.write(
    'some buffer stuff'
)
console.log(buff1.toString());

