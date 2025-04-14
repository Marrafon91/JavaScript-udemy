//               0        1         2         3         4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];

// -----------------------------------------
// EXEMPLO 1: Inserindo no início (como unshift)
// splice(indice, deleteCount, elem1, elem2, ...)
nomes.splice(0, 0, 'Luiz', 'Otavio'); 
// Nesse caso, começa no índice 0, remove 0 elementos, e adiciona 'Luiz' e 'Otavio'
console.log('Depois do unshift com splice:', nomes);

// -----------------------------------------
// EXEMPLO 2: Removendo elementos do final (como pop)
const removidosPop = nomes.splice(-1, 1);
// Remove 1 elemento a partir do último índice (-1)
// Equivale a um pop()
console.log('Depois do pop com splice:', nomes);
console.log('Removido (pop):', removidosPop);

// -----------------------------------------
// EXEMPLO 3: Removendo elementos do início (como shift)
const removidosShift = nomes.splice(0, 1);
// Remove 1 elemento a partir do índice 0
// Equivale a um shift()
console.log('Depois do shift com splice:', nomes);
console.log('Removido (shift):', removidosShift);

// -----------------------------------------
// EXEMPLO 4: Remover e adicionar ao mesmo tempo (como replace)
const removidosReplace = nomes.splice(2, 2, 'Luiz', 'Guilherme');
// A partir do índice 2, remove 2 elementos e adiciona 'Luiz' e 'Guilherme'
console.log('Depois de substituir com splice:', nomes);
console.log('Removidos (replace):', removidosReplace);

// array.splice(índice, quantosRemover, item1, item2, ...)
