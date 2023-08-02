const convertToCelsius = function(f) {
  return round((f-32)*5/9);
};

const convertToFahrenheit = function(c) {
  return round((c*9/5)+32);
};

function round(number){
  let result = Math.round(number*10);
  return result/10;
}


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
