/* 1. Contagem com Passo
Escreva uma função que recebe três parâmetros: inicio, fim e passo. A função deve imprimir no console os números de inicio até fim, contando de acordo com o passo.

📌 Desafio: Se passo for 0 ou negativo, defina um valor padrão de 1. */

function contar(inicio, fim, passo) {
  if (passo === 0) {
    passo = 1;
  }

  if (inicio < fim) {
    if (passo < 0) passo = passo;
    for (let i = inicio; i <= fim; i += passo) {
      console.log(i);
    }
  } else {
    if (passo > 0) passo = passo;
    for (let i = inicio; i >= fim; i += passo) {
    
      console.log(i);
    }
  }
}

contar(1, 10, 2); // Deve imprimir: 1, 3, 5, 7, 9
contar(10, 1, -2); // Deve imprimir: 10, 8, 6, 4, 2
