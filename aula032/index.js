const numero = [
    [1, 2, 3], // 0
    [4, 5, 6], // 1
    [7, 8, 9]  // 2
]

const [lista1, lista2, lista3] = numero;
console.log(lista3[2]); // 9
//const [,[,,seis]] = numero;
//console.log(seis); // 6



// Descrição: Arquivo criado para exemplificar a desestruturação de arrays.
// ...rest, ...spread
// indece        0  1  2  3  4  5  6  7  8
//const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, //9000];
//const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = //numeros;
//console.log(primeiroNumero, segundoNumero, terceiroNumero); // 1 2 3
//console.log(resto); // [4, 5, 6, 7, 8, 9]

//const primeiroNumero = numeros[0]
//console.log(numeros[0]); // 1

/* let a = "A"; // B
let b = "B"; // C
let c = "C"; // A

const letras = ['B', 'C', 'A'];

[a, b, c] = letras;

console.log(a, b, c); // B C A */