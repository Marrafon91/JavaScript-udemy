const a = {
    nome: 'Guilherme',
    sobrenome: 'Marrafon'
};
const b = {...a};

a.nome = 'João'
console.log(a)
console.log(b)


/*
Primitivos (imutáveis) - string, number, boolean, null, undefined, (symbol, bigint) - valores copiados

Referência (mutável) - array, object, function - endereço da memória


let a = [1, 2, 3] // array é uma referência
let b = [...a] // copia o array a
let c = b // c é uma referência para o array b
console.log(a, b) // [1, 2, 3]

a.push(4) // adiciona um elemento ao array a
console.log(a, b) // [1, 2, 3, 4] [1, 2,

b.pop(b) // remove o último elemento do array b
console.log(a, b) // [1, 2, 3] [1, 2, 3] //

a.push('Guilherme') // adiciona um elemento ao array a
console.log(c) // [1, 2, 3, 4, 'Guilherme'] //

*/