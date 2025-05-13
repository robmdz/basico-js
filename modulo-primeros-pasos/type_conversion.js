/*
 Explicit Type Casting
*/

// Convertir string a entero
const string = '42'
const integer = parseInt(string)
console.log(integer, typeof integer)

// Convertir de string a decimal
const stringDecimal = '3.14'
const decimal = parseFloat(stringDecimal)
console.log(decimal, typeof decimal)

// Convertir de decimal a binario
const binary = '1010'
const decimalBinary = parseInt(binary, 2)
console.log(decimalBinary, typeof decimalBinary)

/*
    Implicit Type Casting   
*/ 
// Sumar string con un entero
const sum = '5' + 3
console.log(sum) // -> 53

// Sumar un string con un booleano
const sumWhitBoolean = '5' + true
console.log(sumWhitBoolean) // --> 5true

// Sumar un entero con un booleano
const sumWhitBooleannumber = 5 + true
console.log(sumWhitBooleannumber) // --> 6

// Sumar un valor nulo con un NaN (Not a Number)
const sumNulls = null + NaN
console.log(sumNulls) // --> NaN

/*

Truco: Cómo saber si JavaScript concatena o suma:

Si hay al menos un string, JavaScript concatena.
Si no hay ningún string, JavaScript realiza una suma.

*/
const stringValue = "10";
const numberValue = 10;
const booleanValue = true;
console.log("----- stringValue -------");
console.log(stringValue + stringValue); // 1010 concatena
console.log(stringValue + numberValue); // 1010 concatena
console.log(stringValue + booleanValue );// 10true concatena

console.log("----- numberValue -------");
console.log(numberValue + stringValue); // 1010 concatena
console.log(numberValue + numberValue); // 20 suma
console.log(numberValue + booleanValue); // 11 suma

console.log("----- booleanValue -------");
console.log(booleanValue + stringValue); // true10 concatena
console.log(booleanValue + numberValue); // 11 suma 
console.log(booleanValue + booleanValue); // 2 suma
