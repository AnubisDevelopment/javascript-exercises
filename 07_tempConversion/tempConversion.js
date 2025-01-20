const convertToCelsius = function(f) {
  let conversion = (f-32) * 5/9
  if(conversion !== Number.isInteger(conversion)){
    let decimalValue = conversion.toFixed(1)
    return Number(decimalValue)
  } else {
    return conversion
  }
};

const convertToFahrenheit = function(c) {
  let conversion = (c * 9/5) + 32
    if(conversion !== Number.isInteger(conversion)){
      let decimalValue = conversion.toFixed(1)
      return Number(decimalValue)
    } else {
      return conversion
    }
  //return conversion.toFixed(1)
};

//(x * 9/5) +32 c to f
// (x-32)* 5/9 f to c
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
