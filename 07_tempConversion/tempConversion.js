const ftoc = function(value) {
  convertedValue = (value - 32) * 5/9; 
  convertedValue = Number(convertedValue.toFixed(1));
  return convertedValue
};

const ctof = function(value) {
  convertedValue = (value * 9/5) + 32; 
  convertedValue = Number(convertedValue.toFixed(1));
  return convertedValue
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
