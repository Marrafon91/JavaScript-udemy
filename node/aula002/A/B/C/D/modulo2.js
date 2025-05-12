
// Aqui está sendo exportada uma classe chamada 'Cachorro'
module.exports = class Cachorro {
    // O construtor recebe o nome do cachorro e armazena como propriedade do objeto
    constructor(nome) {
        this.nome = nome;
    }

    // Método 'latir' que imprime uma mensagem no console quando chamado
    latir() {
        console.log(`${this.nome} esta fazendo Au Au`);
    }
}
