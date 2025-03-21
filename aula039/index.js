// Função que gera um número aleatório entre min e max (exclusivo)
function random(min, max) {
    const r = Math.random() * (max - min) + min; // Gera um número decimal aleatório no intervalo
    return Math.floor(r); // Arredonda para baixo para obter um número inteiro
}

// Definição dos valores mínimo e máximo
const min = 1;
const max = 50;

// let rand = random(min, max); // Essa linha poderia iniciar com um valor aleatório
let rand = 10; // Iniciando a variável rand com 10 para garantir que o primeiro while não execute

// Estrutura de repetição while
// O loop while executa enquanto a condição rand !== 10 for verdadeira
while (rand !== 10) { 
    rand = random(min, max); // Gera um novo número aleatório e atribui a rand
    console.log(rand); // Exibe o número gerado no console
}

// Código comentado sobre iteração de caracteres de uma string
/*
const nome = 'Guilherme'; // String para iteração
let i = 0;

while (i < nome.length) { // Percorre cada caractere da string
    console.log(nome[i]); // Exibe o caractere atual
    i++; // Incrementa o índice
}
*/

console.log('#####'); // Separador para diferenciar as saídas dos loops

// Estrutura de repetição do...while
// O loop do...while garante que o bloco seja executado ao menos uma vez
do {
    rand = random(min, max); // Gera um novo número aleatório
    console.log(rand); // Exibe o número gerado
} while (rand !== 10); // Repete até rand ser igual a 10
