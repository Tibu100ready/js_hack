/**
 * mediante el while for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];

while (result.length < 5) {
    result.push(result.length + 1);
}


//export result
module.exports = result;