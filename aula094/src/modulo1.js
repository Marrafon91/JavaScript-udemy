export const nome = 'Guilherme';
export const sobrenome = 'Marrafon';
export const idade = 33;

export function soma(x, y) {
    return x + y;
};

export function mutiplica(x, y) {
     return x * y;
} 

export { nome, sobrenome, idade, soma}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}