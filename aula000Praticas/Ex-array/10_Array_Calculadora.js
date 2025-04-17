// Crie um objeto calculadora;
// Que tem os seguintes metodos somar, subtrair,mutiplicar e dividir;
// Os metodos so devem aceitar dois parametos;
//Utilize cada um dos metodos e imprima os valores no console;

const calculadora = {
  soma: 2 + 2,
  subtrair: 7 - 5,
  mutiplicar: 2 * 3,
  dividir: 10 / 2,
};

console.log(calculadora.soma);
console.log(calculadora.subtrair);
console.log(calculadora.mutiplicar);
console.log(calculadora.dividir);

console.log("###########")

const calculadora1 = {
  soma: (a, b) => a + b,
  subtrair: (a, b) => a - b,
  mutiplicar: (a, b) => a * b,
  dividir: (a, b) => a / b,
  pow: (a, b) => a ** b
};

console.log(calculadora1.soma(2, 5));
console.log(calculadora1.subtrair(10, 6));
console.log(calculadora1.mutiplicar(3, 5));
console.log(calculadora1.dividir(20, 4));
console.log(calculadora1.pow(2, 5))