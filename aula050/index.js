// Função "conta1" que usa o operador rest (...) para armazenar todos os argumentos passados em um array
const conta1 = (...args) => {
    console.log(args); // Exibe os argumentos recebidos na chamada da função
};
conta1('+', 1, 20, 30, 40, 50); // Chamada da função com operador "+" e números

/* 
Outra versão da função "conta" que realiza operações matemáticas de acordo com o operador fornecido.
O primeiro argumento é o operador, o segundo é o acumulador inicial e o restante são os números a serem operados.
*/
const conta = function(operador, acumulador, ...numeros) {
  for (let numero of numeros) { // Percorre os números fornecidos
    if (operador === '+') acumulador += numero; // Soma
    else if (operador === '-') acumulador -= numero; // Subtrai
    else if (operador === '/') acumulador /= numero; // Divide
    else if (operador === '*') acumulador *= numero; // Multiplica
  }
  console.log(acumulador); // Exibe o resultado final da operação
};

conta("+", 1, 20, 30, 40, 50); // Chamada da função para somar os valores fornecidos

/* 
Função que recebe um array como argumento e usa destructuring para pegar seus elementos.
*/
function funcao1([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3); // Exibe os valores extraídos do array
}
funcao1(['Guilherme', 'Marrafon', 30]); // Chamada da função com um array de três elementos

/* 
Função que recebe um objeto e usa destructuring para extrair suas propriedades.
*/
function funcao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade); // Exibe as propriedades do objeto
}
let obj = { nome: 'Guilherme', sobrenome: 'Marrafon', idade: 33 };
funcao(obj); // Chamada da função passando um objeto como argumento

// Exemplo de chamada da função pulando um argumento (undefined será assumido como padrão no destructuring).
// funcao(2, undefined, 20);

// Exemplo de chamada da função com três argumentos diretos.
// funcao(1, 2, 3);

/* 
Trecho de código que soma todos os argumentos recebidos usando a variável "arguments". 
OBS: Essa abordagem funciona apenas em funções declaradas com "function", 
pois "arguments" não existe em arrow functions.
*/
function somaTodos() {
  let total = 0;
  for (let argumento of arguments) { // Percorre todos os argumentos passados para a função
    total += argumento; // Soma os valores
  }
  console.log(total); // Exibe o total
}

// Chamada da função passando valores para somar
somaTodos(1, 2, 3, 4, 5); // Saída esperada: 15
