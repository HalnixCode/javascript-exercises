const convertToCelsius = function(temperatura) {
  return  Math.round(((temperatura - 32) * 5/9) * 10 ) / 10
};

const convertToFahrenheit = function(temperatura) {
  return Math.round(((temperatura * 9/5) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
