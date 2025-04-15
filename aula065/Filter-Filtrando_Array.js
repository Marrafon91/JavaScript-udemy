// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

// Criamos um array com vários números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Usamos o método filter para retornar apenas os números maiores que 10
// A função de callback (valor => valor > 10) é usada para testar cada elemento
// Se a condição for verdadeira (valor > 10), o número é incluído no novo array
const numerosFiltrado = numeros.filter(valor => valor > 10);

// Exibimos o array filtrado no console
console.log(numerosFiltrado);


// Agora temos um array de objetos chamado "pessoas"
// Cada objeto representa uma pessoa com nome e idade
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

// Filtra as pessoas cujo nome tem 7 letras ou mais
// obj.nome.length >= 7 verifica o tamanho do nome
const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 7);

// Exibe no console as pessoas com nomes grandes
console.log(pessoasComNomeGrande);

// Filtra as pessoas com idade maior que 50 anos
// pessoa.idade > 50 retorna true para quem tem mais de 50
const pessoasComMaisIdade = pessoas.filter((pessoa) => pessoa.idade > 50);

// Exibe no console as pessoas com mais de 50 anos
console.log(pessoasComMaisIdade);

// Filtra as pessoas cujo nome termina com a letra "a"
// endsWith('a') verifica se o último caractere do nome é "a"
const pessoasComA = pessoas.filter((pessoa) => pessoa.nome.endsWith('a'));

// Exibe no console os nomes que terminam com "a"
console.log(pessoasComA);
