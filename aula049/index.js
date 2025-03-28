// Declaração de função (Function hoisting)
// Como essa função é declarada com "function", ela sofre hoisting,
// ou seja, pode ser chamada antes da sua definição no código.
falaOi(); 
function falaOi() {
  console.log("oie");
}

// First-class object (Objetos de Primeira Classe)
// Em JavaScript, funções são tratadas como objetos de primeira classe,
// ou seja, podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções.

// Function expression (Expressão de função)
// Aqui, a função é atribuída a uma variável, tornando-se um "dado" que pode ser manipulado.
const souUmDado = function () {
  console.log("sou um dado.");
};
souUmDado(); // Aqui, estamos chamando a função corretamente

/* 
// Função que recebe outra função como argumento
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao(); // Chamando a função recebida como parâmetro
}

// Chamando a função executaFuncao e passando a função "souUmDado" como argumento
executaFuncao(souUmDado); 
*/

// Arrow function (Função de seta)
// Sintaxe mais curta para declarar funções anônimas
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};
funcaoArrow(); // Chamando a arrow function

// Função dentro de um objeto (método)
// Em JavaScript, funções dentro de objetos são chamadas de métodos
const obj = {
  falar() {
    console.log("Estou falando");
  },
};
obj.falar(); // Chamando o método "falar" do objeto "obj"
