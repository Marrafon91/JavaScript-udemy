/* 
Estudo de métodos de objetos:

- Object.values(obj): retorna os valores das propriedades.
- Object.entries(obj): retorna um array com [chave, valor] de cada propriedade.
- Object.assign(destino, ...origens): copia propriedades de um ou mais objetos para o objeto destino.
- Object.getOwnPropertyDescriptor(obj, prop): retorna as informações da propriedade (writable, configurable, enumerable, value).
- ...(spread): espalha as propriedades de um objeto.

Já vimos:
- Object.keys(obj): retorna as chaves do objeto.
- Object.freeze(obj): congela o objeto (não permite alterações).
- Object.defineProperties(obj, props): define várias propriedades.
- Object.defineProperty(obj, prop, descriptor): define uma propriedade.
*/

// Criando objeto inicial
const produto = { 
    nome: "Produto", 
    preco: 1.8, 
    material: "Porcelana" 
};

// Exemplo de Object.entries: percorrendo as entradas do objeto
console.log("Usando Object.entries:");
for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}

// ==========================================

// Exemplo de Object.defineProperty e Object.getOwnPropertyDescriptor:

/*
    - Define uma propriedade de forma manual
    - Aqui, a propriedade 'nome' seria bloqueada para edição (writable: false) 
    - e não poderia ser reconfigurada ou deletada (configurable: false)
*/

// Definindo (comentado para não afetar o resto do código)
// Object.defineProperty(produto, "nome", {
//     writable: false,          // não pode alterar o valor
//     configurable: false,       // não pode deletar nem redefinir
//     value: "Qualquer outra coisa" // novo valor
// });

// Consultando o descriptor da propriedade 'nome'
// console.log(Object.getOwnPropertyDescriptor(produto, "nome"));

// Tentativas (não terão efeito se writable e configurable forem false)
// produto.nome = "Guilherme";   // tentativa de alterar
// delete produto.preco;         // tentativa de deletar
// console.log(produto);

// ==========================================

// Exemplo de Object.freeze:

/*
    - Congela o objeto: não pode alterar, adicionar ou excluir propriedades
*/
// Object.freeze(produto);

// ==========================================

// Exemplo de Object.assign para copiar objetos:

/*
    - Copia o objeto produto para um novo objeto caneca
    - Pode adicionar ou sobrescrever propriedades no novo objeto
*/

const caneca = Object.assign({}, produto, { material: "Porcelana" });
// ou também poderia ser feito manualmente:
// const caneca = { nome: produto.nome, preco: produto.preco };

// Alterações apenas na cópia (não afetam o objeto original)
caneca.nome = "Guilherme";
caneca.preco = 2.5;

// Visualizando os objetos
console.log("Objeto produto:");
console.log(produto);

console.log("Objeto caneca:");
console.log(caneca);

// ==========================================

// Exemplo de Object.keys:
/*
    - Retorna as chaves do objeto como array
*/
console.log("Chaves do objeto produto:");
console.log(Object.keys(produto));
