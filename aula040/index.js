// Criamos um array chamado "numeros" contendo os números de 1 a 9
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Inicializamos a variável "i" com 0 para usar nos loops
let i = 0;

// ======================== DO...WHILE ========================
// O loop "do while" executa o bloco primeiro e depois verifica a condição
do {
  let numero = numeros[i]; // Pegamos o número atual do array
  console.log(numero); // Exibimos o número no console
  i++; // Incrementamos "i" para pegar o próximo número na próxima iteração
} while (i < numeros.length); // O loop continua enquanto "i" for menor que o tamanho do array

console.log("#####"); // Separador para melhor visualização no console

// ======================== FOR TRADICIONAL ========================
// O loop "for" é ideal para percorrer arrays quando precisamos de um índice
for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i]; // Pegamos o número atual do array
  console.log(numero); // Exibimos o número no console
}

console.log("#####"); // Separador para melhor visualização no console

// ======================== FOR...OF ========================
// O loop "for...of" percorre os elementos diretamente, sem precisar de um índice
for (let numero of numeros) {
  if (numero === 2) {
    // Se o número for 2
    console.log("Pulei o numero 2"); // Exibe a mensagem informando que está pulando o número 2
    continue; // "continue" faz o loop pular para a próxima iteração sem executar o restante do código abaixo
  }

  if (numero === 7) {
    // Se o número for 7
    console.log("7 saindo..."); // Exibe a mensagem informando que está saindo do loop
    break; // "break" interrompe completamente o loop
  }

  console.log(numero); // Exibe o número no console, exceto os que foram pulados ou interrompidos
}
