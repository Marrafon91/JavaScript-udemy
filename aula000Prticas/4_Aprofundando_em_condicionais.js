/* Aprofundando em condicionais
1. Crie uma função chamada classificarNumero que recebe um número inteiro como argumento.

2. A função deve retornar uma string com a classificação do número de acordo com as seguintes regras:

Se o número for positivo e par, retorne "Positivo e Par".

Se o número for positivo e ímpar, retorne "Positivo e Ímpar".

Se o número for negativo, retorne "Negativo".

Se o número for zero, retorne "Neutro". */

function classificarNumero(numero) {
  if (numero > 0 && numero % 2 === 0) {
    return "Positivo par";
  } else if (numero > 0 && numero % 2 !== 0) {
    return "Positivo impar";
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Neutro";
  }
}

console.log(classificarNumero(-18));
console.log(classificarNumero(18));
console.log(classificarNumero(-15));
console.log(classificarNumero(19));
console.log(classificarNumero(0));
