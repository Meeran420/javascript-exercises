const convertToCelsius = function(fahr) {
  let result = (fahr - 32) * 5 / 9;
  result = Math.round(result * 10) / 10;
  return result;
};

const convertToFahrenheit = function(cels) {
  let result = cels * 9 / 5 + 32;
  result = Math.round(result * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
