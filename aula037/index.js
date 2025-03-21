const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Marrafon'
}

// for Clássico - Geralmente usado com iteráveis (arrays ou strings)
// for in - Retorna o índice ou chave (string, array ou objetos)
// for of - Retorna o valor em si (iteráveis, arrays ou strings)

/* 
for (let keys in pessoa) {
    console.log(keys, pessoa[keys])
} 
*/

// Criando um array de nomes
const nomes = ['Guilherme', 'Marrafon', 'Oliveira'];

// Usando o loop for clássico para percorrer o array
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('######');

// Usando for in para percorrer os índices do array
for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('######');

// Usando for of para percorrer diretamente os valores do array
for (let valor of nomes) {
    console.log(valor);
}

console.log('#####');

// Usando forEach para percorrer o array com uma função de callback
nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
});
