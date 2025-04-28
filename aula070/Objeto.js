// =======================
// Constructor Function
// =======================
function Pessoa(nome, sobrenome) {
    // Atribuindo propriedades ao objeto criado
    this.nome = nome;
    this.sobrenome = sobrenome;
  
    // Congela o objeto para não permitir alterações futuras
    Object.freeze(this);
  
    // Retorno implícito do objeto criado (não precisa de 'return this')
  }
  
  // Criando instâncias usando 'new'
  const p1 = new Pessoa("Guilherme", "Marrafon");
  const p2 = new Pessoa("Paulo", "Marrafon");
  
  // Testes de tentativa de modificação
  delete p1.nome;        // Não vai funcionar por causa do freeze
  p1.nome = "Roseli";    // Também não altera por causa do freeze
  
  console.log(p1); // { nome: "Guilherme", sobrenome: "Marrafon" }
  console.log(p2); // { nome: "Paulo", sobrenome: "Marrafon" }
  
  // Explicação rápida:
  // - 'new Pessoa' cria um novo objeto vazio {}
  // - Atribui o 'this' para esse objeto
  // - Retorna automaticamente o objeto criado
  // - 'Object.freeze' impede mudanças nesse objeto depois da criação
  
  // =======================
  // Factory Function
  // =======================
  function criaPessoa(nome, sobrenome) {
    return {
      nome,
      sobrenome,
      // Getter para nome completo
      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
      }
    };
  }
  
  // Criando instância via Factory
  const p3 = criaPessoa("Guilherme", "Marrafon");
  console.log(p3.nomeCompleto); // "Guilherme Marrafon"
  
  // Explicação rápida:
  // - Factory function retorna um objeto direto
  // - Não precisa usar 'new'
  // - Mais flexível para casos simples
  
  // =======================
  // Criando Objeto com Object Literal e Object Constructor
  // =======================
  
  // Forma 1: Constructor de Object
  const pessoa1 = new Object();
  pessoa1.nome = "Guilherme";
  pessoa1.sobrenome = "Marrafon";
  pessoa1.idade = 33;
  
  // Métodos adicionados manualmente
  pessoa1.falarNome = function() {
    return `${this.nome} está falando seu nome`;
  };
  
  pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
  };
  
  // Iterando sobre propriedades
  for (let chave in pessoa1) {
    console.log(`${chave}: ${pessoa1[chave]}`);
  }
  
  // Forma 2: Literal Object
  const pessoa2 = {
    nome: "Guilherme",
    sobrenome: "Marrafon"
  };
  
  console.log(pessoa1, pessoa2);
  
  // Acessando propriedades dinamicamente
  const chave = 'nome';
  console.log(pessoa2[chave]); // Acessa "Guilherme"
  
  // Explicação rápida:
  // - 'new Object()' cria um objeto vazio, depois você adiciona propriedades
  // - '{ }' é a forma mais comum e rápida de criar objetos
  // - 'for...in' percorre todas as chaves/propriedades de um objeto
  // - Pode acessar propriedades usando ponto (pessoa.nome) ou colchetes (pessoa['nome'])
  