// Função fábrica que cria multiplicadores
function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

// Criando funções específicas usando a função fábrica
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

// Testando as funções geradas
console.log(duplica(2)); // 4
console.log(triplica(2)); // 6
console.log(quadriplica(2)); // 8

// Alternativa: Funções específicas sem a função fábrica
function duplicaNumero(n) {
  return n * 2;
}

function triplicaNumero(n) {
  return n * 3;
}

function quadriplicaNumero(n) {
  return n * 4;
}

// Testando as funções específicas
console.log(duplicaNumero(2)); // 4
console.log(triplicaNumero(2)); // 6
console.log(quadriplicaNumero(2)); // 8

// Função que retorna outra função para formar frases
function falaFrase(comeco) {
  return function falaResto(resto) {
    return comeco + " " + resto;
  };
}

// Criando uma função específica com "Ola"
const fala = falaFrase("Ola");
const resto = fala("Mundo!");
console.log(resto); // "Ola Mundo!"

// Função que cria um objeto pessoa
function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

// Criando objetos pessoa
const p1 = criaPessoa("Guilherme", "Marrafon");
const p2 = {
  nome: "Guilherme",
  sobrenome: "Oliveira",
};

// Verificando o tipo das variáveis
console.log(typeof p1); // "object"
console.log(typeof p2); // "object"

// Função soma que retorna um valor
function soma(a, b) {
  return a + b;
}
let s1 = soma(2, 5);
console.log(s1); // 7

// Função soma que apenas exibe o resultado no console
function soma2(a, b) {
  console.log(a + b);
}

soma2(5, 2); // Exibe "7" no console
