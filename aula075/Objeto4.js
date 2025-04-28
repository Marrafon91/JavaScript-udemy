// ==========================================
// Exemplo de Prototype Chain manualmente
// ==========================================

// Criando o objeto objA
const objA = {
    chaveA: "A",
    // __proto__: Object.prototype (já é assim automaticamente)
};

// Criando o objeto objB
const objB = {
    chaveB: "B",
    // __proto__: objA (vamos configurar isso depois)
};

// Criando objC de forma diferente (com construtor Object)
const objC = new Object();
objC.chaveC = "C";

// Configurando a cadeia de protótipos
Object.setPrototypeOf(objB, objA); // objB -> herda de objA
Object.setPrototypeOf(objC, objB); // objC -> herda de objB (e indiretamente de objA)

// Agora objC pode acessar chaveA, mesmo que ela esteja em objA
console.log(objC.chaveA); // Saída: "A"

// ==========================================
// Função Construtora Produto + Métodos no Prototype
// ==========================================

// Criando uma função construtora Produto
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Adicionando método de desconto ao prototype de Produto
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

// Adicionando método de aumento ao prototype de Produto
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

// ==========================================
// Criando instâncias e usando prototypes
// ==========================================

// Instância normal usando 'new'
const p1 = new Produto("Camiseta", 50);

// ==========================================
// Caso especial: Objeto literal
// ==========================================

// Objeto literal (não criado com Produto diretamente)
const p2 = {
    nome: "Caneca",
    preco: 15
};

// Fazendo p2 herdar os métodos do prototype de Produto
Object.setPrototypeOf(p2, Produto.prototype);

// Agora p2 pode usar os métodos aumento() e desconto()
p2.aumento(10); // aumenta 10% sobre 15
console.log(p2);

// ==========================================
// Criando objeto com Object.create()
// ==========================================

// Criando p3 já com Produto.prototype como prototype
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    }
});

// Alterando preco de p3
p3.preco = 113;

// Usando método aumento() herdado do prototype de Produto
p3.aumento(10); // aumenta 10% sobre 113

console.log(p3);
