//4. In app.js, require functions from area.js and execute the areas of given figures and console.log the results.
const area=require('./area.js');
console.log('area of circle',area.circle(2));
console.log('area of square',area.square(2));
console.log('area of rectangle',area.rectangle(2,3));

//Q. Write code example to demonstrate blocking and non-blocking code.
const fs=require('fs');
fs.readFile('./text.md',(e,c)=>{console.log("ASync:",c.toString())});
console.log("example1");
console.log("example2");
console.log("example3");
sync=fs.readFileSync('./text.md');
console.log("Sync:",sync.toString());
console.log("example4");
console.log("example5");
console.log("example6");

