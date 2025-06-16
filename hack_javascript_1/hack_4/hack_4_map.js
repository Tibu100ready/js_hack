/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

result = [...Array(4)].map((_, i) => i * 2 + 1)

//export result
module.exports = result;