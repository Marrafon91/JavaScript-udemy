//Escreva uma função que recebe um número e
// retorne o seguinte:
//Número é divisivel por 3 = Fizz
//Número é divisivel por 5 = Buzz
//Número é divisivel por 3 e 5 = FizzBuzz
//Número  NÃO é divisivel por por 3 e 5 = Retorna o proprio número
// Checar se o número é realmente um número = Retorna o proprio número
// Use a função com números de 0 a 100

/* function calcular() {
  let num1 = 10;
  let num2 = 5;

  if (num1 % num2 === 0) {
    console.log(`${num1} é divisível por ${num2}`);
  } else {
    console.log(`${num1} NÃO é divisível por ${num2}`);
  }
}
calcular() */

function calcular(num) {
  if (typeof num !== "number") {
    return num;
  }

  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

for (let i = 0; i <= 100; i++) {
  console.log(calcular(i));
}
