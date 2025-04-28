// Construtora -> Serve como molde para criar novos objetos (semelhante a uma classe em outras linguagens)
function Pessoa(nome, sobrenome) {
    // Atributos de instância: cada objeto criado com 'Pessoa' terá seus próprios 'nome' e 'sobrenome'
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Método de instância (comentado porque é melhor colocar métodos no prototype para otimizar memória)
    // this.nomeCompleto = () => `ORIGINAL ${this.nome} ${this.sobrenome}`;
};

// Método compartilhado via prototype
// Todos os objetos criados a partir da função construtora 'Pessoa' terão acesso a este método
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};

// ==========================================

// Criando instâncias (objetos) usando o operador 'new'
const pessoa1 = new Pessoa("Guilherme", "O.");
const pessoa2 = new Pessoa("Maria", "A.");

// Criando um objeto nativo do JavaScript para comparação
const data = new Date();

// ==========================================

// Visualizando as instâncias no console
console.dir(pessoa1); // Mostra a estrutura completa de pessoa1
console.dir(data);    // Mostra a estrutura completa de um objeto Date
