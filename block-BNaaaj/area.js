//In area.js write functions to calculate area of square, rectangle and circle and export them using module.exports
function square(l){return l*l};
function rectangle(l,b){return l*b};
function circle(r){return (22/7)*r*r};

module.exports={square,rectangle,circle}
