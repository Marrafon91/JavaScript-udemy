// Função construtora -> cria objetos do tipo Pessoa
// Função fábrica também cria objetos, mas sem a necessidade do "new"
// Aqui estamos utilizando uma função construtora (new Pessoa)

// Definição da função construtora Pessoa
function Pessoa(nome, sobrenome) {
    // Atributos e métodos privados (não acessíveis fora da função)
    const ID = 123456; // Variável privada, só existe dentro da função
    const metodoInterno = () => { 
        // Método privado, não pode ser chamado fora da função
    };

    // Atributos e métodos públicos (acessíveis fora da função)
    this.nome = nome; // Atributo público
    this.sobrenome = sobrenome; // Atributo público

    this.metodo = () => {
        // Método público, pode ser chamado externamente
        console.log(this.nome + ": Sou um método");
    };
}

// Criando instâncias (objetos) de Pessoa usando "new"
const p1 = new Pessoa("Guilherme", "Marrafon");
const p2 = new Pessoa("Maria", "Oliveira");

// Chamando o método público do objeto p1
p1.metodo(); // Saída no console: "Guilherme: Sou um método"
