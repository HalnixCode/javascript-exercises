const removeFromArray = function(array, ...removeElementos) {
    // let nuevoArray = []
    // for(let i = 0; i < array.length; i++) {
    //     console.log(array[i]);
    //     if (removeElemntos.includes(array[i])) {
    //         console.log(array[i]);
    //     } else {
    //         nuevoArray.push(array[i])
    //     }
    // }
    // console.log(nuevoArray);
    // let nuevoArray = []

    // for(let i = 0; i < array.length; i++) {
    //     let estaEnLista = false;

    //     for(let j = 0; j < removeElemntos.length; j++) {
    //         if (array[i] === removeElemntos[j]){
    //             estaEnLista = true;
    //             break;
    //         }
    //     }
    //     if (!estaEnLista) {
    //         console.log(nuevoArray[nuevoArray.length] = array[i]);
    //     }
    // }
    // console.log(nuevoArray);
    // return nuevoArray
    return array.filter(elemento => !removeElementos.includes(elemento))

};  

console.log(removeFromArray([1,2,3,'hola',true],1,true));

// Do not edit below this line
module.exports = removeFromArray;
