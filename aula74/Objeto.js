// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => `${this.nome}  ${this.sobrenome}`
};

// Instancia
const pessoa1 = new Pessoa ("Guilherme", "O.");
const data = new Date();

console.dir(pessoa1);
console.dir(data);