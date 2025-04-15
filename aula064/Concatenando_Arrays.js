// Criação do primeiro array com os números 1, 2 e 3
const arr1 = [1, 2, 3];

// Criação do segundo array com os números 4, 5 e 6
const arr2 = [4, 5, 6];

// Criando um novo array arr3 utilizando o operador spread (...)
// O operador spread "espalha" os elementos de um array dentro de outro array
const arr3 = [
  ...arr1,         // espalha os elementos de arr1: 1, 2, 3
  'Guilherme',     // adiciona a string 'Guilherme' diretamente no array
  ...arr2,         // espalha os elementos de arr2: 4, 5, 6
  ...[7, 8, 9]     // espalha os elementos do array [7, 8, 9]
];

// Exibe o array completo no console
console.log(arr3); 
