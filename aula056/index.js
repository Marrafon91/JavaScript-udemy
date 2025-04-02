// Função dentro de um objeto é chamada de método

// Factory function (função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
    return {
      // Atributos do objeto
      nome,
      sobrenome,
  
      // Getter para retornar o nome completo
      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
      },
  
      // Setter para definir um novo nome completo
      set nomeCompleto(valor) {
        valor = valor.split(" "); // Divide o nome completo em um array de palavras
        this.nome = valor.shift(); // Pega o primeiro nome e atribui a "nome"
        this.sobrenome = valor.join(" "); // Junta o restante como sobrenome
      },
  
      // Método que retorna uma string com uma mensagem
      fala: function (assunto = 'falando sobre NADA') {
        return `${this.nome} está ${assunto}.`;
      },
  
      // Atributos de altura e peso
      altura: a,
      peso: p,
  
      // Getter para calcular o IMC (Índice de Massa Corporal)
      get imc() {
        const indice = this.peso / this.altura ** 2; // Fórmula do IMC
        return indice.toFixed(2); // Retorna o valor com 2 casas decimais
      },
    };
  }
  
  // Criando três objetos pessoa usando a função fábrica
  const p1 = criaPessoa("Guilherme", "Marrafon", 1.8, 92);
  const p2 = criaPessoa("Simoni", "Rezende", 1.6, 54);
  const p3 = criaPessoa("Luiz", "Miranda", 1.8, 110);
  
  // Exibindo o IMC de cada pessoa no console
  console.log(p1.imc); // Saída esperada: 28.40
  console.log(p2.imc); // Saída esperada: 21.09
  console.log(p3.imc); // Saída esperada: 33.95
  
  /* 
  // Código comentado que poderia ser usado para testar outro peso para p2
  const p2 = criaPessoa("Simoni", "Rezende", 1.6, 58);
  console.log(p2.imc()); // Exibiria o IMC atualizado de p2
  console.log(p2.fala("falando sobre JavaScript")); // Exibe a fala personalizada
  */
  