// Criando um array de nomes
const nomes = ["Guilherme", "Marrafon", "Oliveira"];

// Usando join() para unir os elementos do array em uma única string, separados por espaço
const nome = nomes.join(" ");

console.log(nome); // Saída: "Guilherme Marrafon Oliveira"

// ===========================================
//         MANIPULAÇÃO DE ARRAYS
// ===========================================

// Criando um array com mais nomes
const nomesCompletos = ["Guilherme", "Marrafon", "Oliveira", "Simoni", "Rezende"];

// Utilizando slice() para criar um novo array sem os últimos dois elementos
const novo = nomesCompletos.slice(0, -2);

console.log(novo); // Saída: ["Guilherme", "Marrafon", "Oliveira"]

// Criando uma cópia do array usando spread operator (...)
const copiaNomes = [...nomesCompletos];

console.log(copiaNomes); // Saída: ["Guilherme", "Marrafon", "Oliveira", "Simoni", "Rezende"]

// ===========================================
//         ADICIONANDO ELEMENTOS
// ===========================================

// Adicionando um nome no início do array
nomesCompletos.unshift("Simoni"); 

// Adicionando um nome no final do array
nomesCompletos.push("Rezende"); 

console.log(nomesCompletos); 
// Saída: ["Simoni", "Guilherme", "Marrafon", "Oliveira", "Simoni", "Rezende", "Rezende"]

// ===========================================
//         REMOVENDO ELEMENTOS
// ===========================================

// Removendo o último elemento do array
const removido = nomesCompletos.pop(); 

console.log(removido); // Saída: "Rezende"
console.log(nomesCompletos); 
// Saída: ["Simoni", "Guilherme", "Marrafon", "Oliveira", "Simoni", "Rezende"]

// Removendo o primeiro elemento do array
const deslocado = nomesCompletos.shift(); 

console.log(deslocado); // Saída: "Simoni"
console.log(nomesCompletos); 
// Saída: ["Guilherme", "Marrafon", "Oliveira", "Simoni", "Rezende"]

// ===========================================
//         MODIFICANDO ELEMENTOS
// ===========================================

// Alterando um valor dentro do array pelo índice
nomesCompletos[2] = "Olivia"; 

console.log(nomesCompletos); 
// Saída: ["Guilherme", "Marrafon", "Olivia", "Simoni", "Rezende"]

// Removendo um elemento sem alterar a estrutura do array
delete nomesCompletos[2]; 

console.log(nomesCompletos); 
// Saída: ["Guilherme", "Marrafon", undefined, "Simoni", "Rezende"]

// Verificando o tamanho do array
console.log(nomesCompletos.length); // Saída: 5

console.log(novo, deslocado);

/* Explicação dos Métodos Utilizados
✅ join(" ") → Converte o array em uma string, unindo os elementos com um espaço.
✅ slice(0, -2) → Cria uma cópia do array sem os últimos dois elementos.
✅ spread operator ([...array]) → Cria uma cópia do array.
✅ unshift("valor") → Adiciona um elemento no início do array.
✅ push("valor") → Adiciona um elemento no final do array.
✅ pop() → Remove e retorna o último elemento do array.
✅ shift() → Remove e retorna o primeiro elemento do array.
✅ nomes[índice] = "valor" → Modifica um elemento do array pelo índice.
✅ delete nomes[índice] → Remove um elemento sem alterar o comprimento do array (deixa undefined).
✅ nomes.length → Retorna a quantidade de elementos do array. */