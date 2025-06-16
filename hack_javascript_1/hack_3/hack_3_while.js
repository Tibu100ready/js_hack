/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];

while (result.length < 5) {
    result.push(5 - result.length);
}


//export result
module.exports = result;