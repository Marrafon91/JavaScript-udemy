let num1 = 10;  // Definindo o primeiro número
let num2 = 7;   // Definindo o segundo número

function number(num1, num2) {  // Função que recebe dois números como parâmetros
  
  if (num1 > num2) {  // Verifica se o primeiro número é maior ou igual ao segundo
    return num1;  // Se for, retorna o primeiro número
  } else {
    return num2;  // Caso contrário, retorna o segundo número
  }
}

let maiorNumero = number(num1, num2);  // Chama a função e armazena o valor retornado
console.log(`O maior número será exibido aqui. >>> ${maiorNumero} <<<`);  // Exibe o maior número

//------------------------------------------------------//

const max = (x,y) =>  x > y ? x : y;
console.log(max(100, 200))
