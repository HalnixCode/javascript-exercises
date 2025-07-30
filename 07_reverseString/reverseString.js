const reverseString = function(palabra) {
    // return palabra.split('').reverse().join('')
    let palabraInvertida = ''
    for(let i = palabra.length - 1 ; i >= 0; i--){
        console.log(palabra[i]);
        palabraInvertida += palabra[i]
    }
    return palabraInvertida
}

console.log(reverseString('Hola'));

// Do not edit below this line
module.exports = reverseString;
