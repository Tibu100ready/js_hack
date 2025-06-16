/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

while (result.length < 4) {
    result.push(result.length * 2 + 1);
}


//export result
module.exports = result;