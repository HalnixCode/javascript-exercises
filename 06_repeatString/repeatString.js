const repeatString = function(string, number) {
  let acumuladorCadena = ''

    if (number < 0) {
        return 'ERROR'

    } else {
        for (let i = 0; i < number; i++ ) {
            
            acumuladorCadena += string
        }
    }

    return acumuladorCadena

};

console.log(repeatString('bye', -1))

// Do not edit below this line
module.exports = repeatString;
