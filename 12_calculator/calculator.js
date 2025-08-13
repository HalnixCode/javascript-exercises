const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((suma, item) => suma + item, 0)
  // let suma = 0
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i])
  //   suma += arr[i]
  // }
  // console.log(suma)
  // return suma
};

const multiply = function(arr) {
  return arr.reduce((acc, item) => acc * item) 
  // let acumulador = 1
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i])
  //   acumulador = acumulador * arr[i]
  // }
  // console.log(acumulador)
  // return acumulador
};

const power = function(a, b) {
	return Math.pow(a, b)
  // return a ** b
};

const factorial = function(num) {
  let acumulador = 1
	for (let i = num; i >= 1;  i--) {
    acumulador = acumulador * i
  } 
  return acumulador 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
