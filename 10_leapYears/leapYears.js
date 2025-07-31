const leapYears = function(year) {
    if (year % 4 === 0 ) {
        console.log('Si se puede dividir entre 4 = ' + year );
        if (year % 100 === 0){
            console.log('Tabien es divisible entre 100');
            if (year % 100 === 0 && year % 400 === 0 ) {
                console.log('Es divisible entre 100 y 400 entonces es bisiesto');
                return true
            }
            return false
        }
        return true
    } else {
        console.log('No es un anio bisiesto');
        return false
    }
};

console.log(leapYears(2004))

// Do not edit below this line
module.exports = leapYears;
