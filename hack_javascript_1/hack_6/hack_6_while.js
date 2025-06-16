/**
 * mediante el while for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a","n"]
 */
let str = "fooziman";
let result = [];

while (str.length > 0) {
    result.push(str[0]);
    str = str.slice(1); // Remove the first character from the string
}

//export result
module.exports = result;