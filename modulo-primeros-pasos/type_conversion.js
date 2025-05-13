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

```/\* Explicit Type Casting\*/
// Convertir string a enteroconst string = '42'const integer = parseInt(string)console.log(integer, typeof integer)
// Convertir de string a decimalconst stringDecimal = '3.14'const decimal = parseFloat(stringDecimal)console.log(decimal, typeof decimal)
// Convertir de decimal a binarioconst binary = '1010'const decimalBinary = parseInt(binary, 2)console.log(decimalBinary, typeof decimalBinary)
/\*    Implicit Type Casting   \*/ // Sumar string con un enteroconst sum = '5' + 3console.log(sum) // -> 53
// Sumar un string con un booleanoconst sumWhitBoolean = '5' + trueconsole.log(sumWhitBoolean) // --> 5true
// Sumar un entero con un booleanoconst sumWhitBooleannumber = 5 + trueconsole.log(sumWhitBooleannumber) // --> 6
// Sumar un valor nulo con un NaN (Not a Number)const sumNulls = null + NaNconsole.log(sumNulls) // --> NaN
