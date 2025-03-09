//               0123456789..... 
let umaString = 'O rato roeu a roupa do rei de roma.' // a barra invertiva como espaco

console.log(umaString.concat(' em', ' uma', ' lindo dia')) // concatenacao
console.log(umaString + ' em um lindo dia.') // concatenacao
console.log(`${umaString} em um lindo dia.`) // concatenacao
// Expressoes Regular.
console.log(umaString.indexOf('o', 3)) // indexof
console.log(umaString.lastIndexOf('m', 3)) // busca a ultima ocorrencia
console.log(umaString.match(/[a-z]/g)) // pegar todos os caracteres
console.log(umaString.search(/r/)) // busca a primeira ocorrencia
console.log(umaString.replace(/r/g, '#')) // replace
console.log(umaString.length) // tamanho da string
console.log(umaString.length - 3) // tamanho da string - 3 caracteres
console.log(umaString.slice(- 3)) // pegar os 3 ultimos caracteres
console.log(umaString.slice(0, 11)) // pegar uma parte da string
console.log(umaString.substring(umaString.length -5, umaString. length - 1)) // pegar uma parte da string
console.log(umaString.split(' ', 3)) // dividir a string em um array
console.log(umaString.toUpperCase()) // transformar em maiusculo
console.log(umaString.toLowerCase()) // transformar em minusculo

// sites w3school e developer.mozilla.org e ECMAscript.