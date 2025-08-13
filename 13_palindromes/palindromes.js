const palindromes = function (texto) {
    const textolimpio = texto
        .toLowerCase()
        .replace(/[ .,!]/g, '')

    console.log(textolimpio)   
    
    const textoRevertido = texto
        .toLowerCase()
        .split('')
        .reverse()
        .join()
        .replace(/[ .,!]/g, '')

    console.log(textoRevertido)
     
    return textolimpio === textoRevertido
};
console.log(palindromes('oso'))
// Do not edit below this line
module.exports = palindromes;
