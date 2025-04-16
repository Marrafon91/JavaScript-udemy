// ======= DOBRAR OS NÚMEROS =======

// Array com vários números
// índice:         0   1   2  3  4  5  6  7  8   9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Cria um novo array onde cada número do array original será dobrado (multiplicado por 2)
// O método .map() percorre cada valor e aplica a função (valor * 2)
const numerosEmDobro = numeros.map((valor) => valor * 2);

// Exibe no console o novo array com os números dobrados
console.log(numerosEmDobro);
// Resultado: [10, 100, 160, 2, 4, 6, 10, 16, 14, 22, 30, 44, 54]

//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

// ======= MANIPULAÇÃO DE OBJETOS COM MAP =======

// Array de objetos, onde cada objeto representa uma pessoa com nome e idade
const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Leticia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Wallace", idade: 47 },
  ];

// 1. Retorna apenas uma string com o nome da pessoa

// Usando .map() para criar um novo array contendo apenas os nomes
// Para cada objeto no array, retorna apenas o valor da chave "nome"
const nomePessoas = pessoas.map((obj) => obj.nome);

// Exibe no console o array com os nomes
console.log(nomePessoas);
// Resultado: ["Luiz", "Maria", "Eduardo", "Leticia", "Rosana", "Wallace"]

// 2. Remove apenas a chave "nome" do objeto

// Usa .map() para criar um novo array onde cada objeto tem apenas a chave "idade"
// Cria um novo objeto com a sintaxe { idade: obj.idade }
const removerNomes = pessoas.map((obj) => ({ idade: obj.idade }));

// Exibe o novo array de objetos sem a chave "nome"
console.log(removerNomes);
// Resultado: [ { idade: 62 }, { idade: 23 }, { idade: 55 }, ... ]

// 3. Adiciona uma chave "id" em cada objeto

// Usa .map() com dois parâmetros: o objeto atual e o índice (posição no array)
// Faz uma cópia do objeto original com o spread operator (...obj)
// Adiciona a nova chave "id" com o valor do índice atual
const chaveComId = pessoas.map((obj, indice) => {
  const newObj = { ...obj }; // copia todas as propriedades do objeto original
  newObj.id = indice;        // adiciona a chave "id" com o número do índice
  return newObj;             // retorna o novo objeto com id
});

// Exibe o array com os novos objetos, agora contendo a chave "id"
console.log(chaveComId);
/*
Resultado:
[
  { nome: "Luiz", idade: 62, id: 0 },
  { nome: "Maria", idade: 23, id: 1 },
  { nome: "Eduardo", idade: 55, id: 2 },
  { nome: "Leticia", idade: 19, id: 3 },
  { nome: "Rosana", idade: 32, id: 4 },
  { nome: "Wallace", idade: 47, id: 5 }
]
*/