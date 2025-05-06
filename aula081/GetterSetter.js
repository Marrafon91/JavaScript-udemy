// Cria um símbolo privado para a propriedade velocidade
const _velocidade = Symbol("velocidade");

class Carro {
  constructor(nome) {
    this.nome = nome;                 // Define o nome do carro
    this[_velocidade] = 0;           // Inicializa a velocidade como 0 (propriedade privada)
  }

  // Setter da velocidade com validação
  set velocidade(valor) {
    console.log('SETTER');
    if (typeof valor !== 'number') return;     // Ignora se não for número
    if (valor >= 100 || valor <= 0) return;    // Ignora se não estiver entre 0 e 100
    this[_velocidade] = valor;                 // Define a velocidade se for válida
  }

  // Getter da velocidade
  get velocidade() {
    console.log('GETTER');
    return this[_velocidade];                  // Retorna o valor privado da velocidade
  }

  // Método para aumentar a velocidade em 1, até no máximo 100
  acelerar() {
    if (this[_velocidade] >= 100) return;      // Não aumenta se já for 100
    this[_velocidade]++;
  }

  // Método para diminuir a velocidade em 1, até no mínimo 0
  freiar() {
    if (this[_velocidade] <= 0) return;        // Não diminui se já for 0
    this[_velocidade]--;
  }
}

// Cria um novo carro chamado "Fusca"
const c1 = new Carro("Fusca");

// Tenta acelerar 200 vezes, mas o limite é 100 (por causa do if no método acelerar)
for (let i = 0; i <= 200; i++) {
  c1.acelerar();
}

// Tenta definir a velocidade para 100, mas o setter bloqueia porque não aceita 100 (apenas até 99)
c1.velocidade = 100;

// Exibe o objeto carro no console (a velocidade não aparece porque está com Symbol)
console.log(c1);

//=====================================================//

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;               // Define o nome
    this.sobrenome = sobrenome;     // Define o sobrenome
  }

  // Getter que retorna o nome completo da pessoa
  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  // Setter que permite mudar o nome completo, separando nome e sobrenome
  set nomeCompleto(valor) {
    valor = valor.split(' ');            // Divide a string em um array de palavras
    this.nome = valor.shift();           // Pega a primeira palavra como nome
    this.sobrenome = valor.join(' ');    // Junta o resto como sobrenome
  }
}

// Cria uma pessoa
const p1 = new Pessoa('Guilherme', 'Marrafon');

// Altera o nome completo da pessoa
p1.nomeCompleto = 'Guilherme Marrafon de Oliveira';

// Exibe os dados no console
console.log(p1.nome);           // "Guilherme"
console.log(p1.sobrenome);      // "Marrafon de Oliveira"
console.log(p1.nomeCompleto);   // "Guilherme Marrafon de Oliveira"

