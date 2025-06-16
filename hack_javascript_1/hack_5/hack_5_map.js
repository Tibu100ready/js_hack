/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

result = [...Array(4)].map((_, i) => 7 - i * 2)


//export result
module.exports = result;