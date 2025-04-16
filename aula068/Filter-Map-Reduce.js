// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar valores
// -> Reduzir (somar tudo)

//               0   1   2  3  4  5  6  7  8  9  10   11  12
// Array com vários números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Encadeamento de métodos para obter a soma do dobro de todos os números pares
const numresPares = numeros

  // 1º passo: filtrar apenas os números pares
  .filter((valor) => valor % 2 === 0) // retorna true para os valores pares

  // 2º passo: dobrar cada número par encontrado
  .map((valor) => valor * 2) // multiplica cada número por 2

  // 3º passo: somar todos os valores dobrados
  .reduce((acumulador, valor) => acumulador + valor); // acumula a soma dos valores

// Resultado final será a soma: 100 + 160 + 4 + 16 + 44 = 324
console.log(numresPares); // Exibe 324 no console

