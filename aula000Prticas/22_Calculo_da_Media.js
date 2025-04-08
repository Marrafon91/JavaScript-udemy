/* Cálculo da média
Escreva uma função chamada calculateAverage que recebe um array de números como argumento.

A função deve calcular a média dos números no array.

A média é calculada somando todos os números e dividindo pelo total de números no array.

A função deve retornar o valor da média calculada. */

// Função que calcula a média de um array de números

function calculateAverage(numbers) {
    // Se o array estiver vazio, retorna 0 para evitar erro de divisão por zero
    if (numbers.length === 0) return 0;
  
    // Calcula a soma de todos os números do array usando o método reduce()
    // O reduce percorre o array acumulando a soma dos números
    const soma = numbers.reduce((total, num) => total + num, 0);
  
    // Calcula a média dividindo a soma pelo total de elementos no array
    const media = soma / numbers.length;
  
    // Retorna a média calculada
    return media;
  }
  
  // Testando a função com diferentes entradas
  console.log(calculateAverage([10, 20, 30, 40, 50])); // Saída esperada: 30
  console.log(calculateAverage([5, 10, 15])); // Saída esperada: 10
  console.log(calculateAverage([])); // Saída esperada: 0 (array vazio)
  