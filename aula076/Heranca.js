// ==========================================
// Função Construtora Produto
// ==========================================

// Produto -> possui nome e preço, e métodos aumento e desconto
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Métodos de Produto (no prototype, para serem compartilhados)
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

// ==========================================
// Função Construtora Camiseta
// ==========================================

// Camiseta herda de Produto e adiciona a propriedade cor
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // "chama" Produto dentro de Camiseta
    this.cor = cor;
}

// Herdar o prototype de Produto
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

// Sobrescrever o método aumento especificamente para Camiseta
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

// ==========================================
// Função Construtora Caneca
// ==========================================

// Caneca herda de Produto e adiciona material e estoque
function Caneca(nome, preco, material, estoqueInicial) {
    Produto.call(this, nome, preco);
    this.material = material;

    // Corrigido: estoqueInicial é usado no closure corretamente
    let estoque = estoqueInicial; // variável privada dentro do objeto

    // Definindo a propriedade estoque com getter e setter
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

// Herdar o prototype de Produto
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

// ==========================================
// Criando instâncias
// ==========================================

const produto = new Produto('Genérico', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Porcelana', 5);

// Testando setter: alterar estoque da caneca
caneca.estoque = 100;

// ==========================================
// Exibindo resultados
// ==========================================

console.log(caneca.estoque); // Acessa via getter
console.log(caneca);
console.log(camiseta);
console.log(produto);
