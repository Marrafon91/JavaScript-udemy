const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Marrafon',
    idade: 33,
    endereco: {
        rua: 'Jardim Vanessa',
        numero: 212
    }
}

// Atribuição via desestruturação
// const { nome, sobrenome, idade } = pessoa
//const {endereco: {rua: r = 12345, numero}, endereco } = pessoa

const { nome, sobrenome, ...resto} = pessoa
console.log(nome, sobrenome, resto) // { rua: 'Jardim Vanessa', numero: 212 };