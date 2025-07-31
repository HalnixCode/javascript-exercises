const sumAll = function(num1, num2) {
    const esNumeroValido = n => typeof n === 'number' && Number.isInteger(n) && n >= 0;
    
    if (!esNumeroValido(num1) || !esNumeroValido(num2)) {
        return 'ERROR'
    }   

    const menor = Math.min(num1, num2)
    const mayor = Math.max(num1, num2)
    
    let sumaTotal = 0
    for (let i = menor; i <= mayor; i++) {
        sumaTotal += i
    }
    return sumaTotal
};

console.log(sumAll(123, 1));
// Do not edit below this line
module.exports = sumAll;
