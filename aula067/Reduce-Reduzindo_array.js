// Some todos os numeros (reduce)
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)

//               0   1   2  3  4  5  6  7  8  9  10   11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumuldor, valor) {
  acumuldor += valor;
  return acumuldor;
});

console.log(total);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 105 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 64 },
  { nome: "Wallace", idade: 47 },
];

const maisVelha = pessoas.reduce(function (acumuldor, valor) {
  if (acumuldor.idade > valor.idade) return acumuldor;
  return valor;
});

console.log(maisVelha);
