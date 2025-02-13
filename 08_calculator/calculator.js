const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(x) {
	return x.reduce((a,b)=> 
    a + b, 0)
};

const multiply = function(x) {
  return x.reduce((a,b)=> a * b)
};

const power = function(x, y) {
	return Math.pow(x,y)
};

const factorial = function(x) {
  if (x == 1 || x == 0){
    return 1
  } else {
  let sum = 1
	 for(let i = 1; i <= x; i++){
    sum *= i 
  }
  return sum
}};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
