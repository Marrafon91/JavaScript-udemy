function somaNumerosPares(numbers) {
  let soma = 0;

  for (let numeros of numbers) {
    if (numeros % 2 === 0) soma += numeros;
  }

  return soma;
}

console.log(somaNumerosPares([12, 3, 4, 7, 8]));
console.log(somaNumerosPares([-12, 5, 10, 0]));
console.log(somaNumerosPares([1, 3, 4, 5]));
console.log(somaNumerosPares([]));
