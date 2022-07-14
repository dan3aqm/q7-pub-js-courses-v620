
///function expressions ex 

//define a function with function-expresion syntax 
let varContainingFunction = function() {
    let varInFunction = "I'm in a function.";
    console.log("hi there!", varInFunction);
};

//call/invoke the fn
varContainingFunction();


/// ex 2 m-mdn-x

const getRectArea = function(width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// expected output: 12




