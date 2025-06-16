/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

while (result.length < 4) {
    result.push(7 - result.length * 2);
}  


//export result
module.exports = result;