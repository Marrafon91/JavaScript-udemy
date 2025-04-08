// Define a função construtora Calculadora
function Calculadora() {
  // Seleciona o elemento de exibição da calculadora
  this.display = document.querySelector(".display");

  // Método que inicializa a calculadora
  this.inicia = () => {
    this.capturaCliques(); // Ativa os eventos de clique nos botões
    this.capturaEnter();   // Ativa o evento de pressionar a tecla "Enter"
  };

  // Método que captura a tecla "Enter" para realizar o cálculo
  this.capturaEnter = () => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.realizaConta(); // Se "Enter" for pressionado, executa o cálculo
    });
  };

  // Método que captura os cliques nos botões da calculadora
  this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target; // Obtém o elemento que foi clicado

      // Verifica se o botão clicado pertence a uma das classes esperadas e chama a função correspondente
      if (el.classList.contains("btn-num")) this.addNumDisplay(el); // Adiciona número ao display
      if (el.classList.contains("btn-clear")) this.clear(); // Limpa o display
      if (el.classList.contains("btn-del")) this.del(); // Apaga um caractere
      if (el.classList.contains("btn-eq")) this.realizaConta(); // Realiza o cálculo
    });
  };

  // Método que realiza o cálculo baseado no conteúdo do display
  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value); // Usa eval para calcular a expressão no display

      // Verifica se o resultado é válido
      if (!conta && conta !== 0) {
        alert("Conta inválida"); // Mostra um alerta se a conta for inválida
        return;
      }
      this.display.value = conta; // Exibe o resultado no display
    } catch (e) {
      alert("Conta inválida"); // Captura erro de sintaxe e exibe alerta
      return;
    }
  };

  // Método que adiciona o número ou operador ao display
  this.addNumDisplay = (el) => {
    this.display.value += el.innerText; // Concatena o valor do botão ao display
    this.display.focus(); // Mantém o foco no display para digitação contínua
  };

  // Método que limpa completamente o display
  this.clear = () => (this.display.value = "");

  // Método que remove o último caractere do display
  this.del = () => (this.display.value = this.display.value.slice(0, -1));
}

// Instancia um objeto da classe Calculadora
const calculadora = new Calculadora();
calculadora.inicia(); // Inicia a calculadora
