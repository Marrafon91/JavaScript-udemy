const nome = 'Guilherme';
const sobrenome = 'Marrafon';
const idade = 33;

function soma(x, y) {
    return x + y;
};

export { nome, sobrenome, idade, soma as default}

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }