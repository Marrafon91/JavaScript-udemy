// Definindo a classe ControleRemoto
class ControleRemoto {
    // Construtor: método chamado ao criar uma nova instância da classe
    constructor(tv) {
      this.tv = tv;       // Marca da TV
      this.volume = 0;    // Volume inicial da TV
    }
  
    // Método de instância: manipula o volume com base em um valor fornecido
    aumentarVolume(valor) {
      // Verifica se o valor está fora do intervalo permitido
      if (valor < 0 || valor > 100) {
        console.log("Erro: volume deve estar entre 0 e 100.");
        return; // Encerra o método se o valor for inválido
      }
  
      // Atualiza o volume com o valor fornecido
      this.volume = valor;
  
      // Exibe mensagens específicas dependendo do valor
      if (this.volume === 100) {
        console.log(`${this.volume} chegou no MAX`);
      } else if (this.volume === 0) {
        console.log(`${this.volume} chegou no MIN`);
      } else {
        console.log(`${this.volume} está em um volume intermediário.`);

      }
    }
  
    // Método de instância: diminui o volume em 2 unidades
    diminuirVolume() {
      if (this.volume > 0) {
        this.volume -= 2;
        if (this.volume < 0) this.volume = 0; // Garante que o volume não fique negativo
      } else {
        console.log("Volume já está no mínimo.");
      }
    }
  
    // Método estático: não depende da instância da classe
    static soma(x, y) {
      return x + y;
    }
  }
  
  // Criação de uma nova instância da classe ControleRemoto
  const controle1 = new ControleRemoto("LG");
  
  // Teste do método aumentarVolume com valor válido
  controle1.aumentarVolume(50);  // Saída: "50 volume fora do Limite."
  
  // Teste do método aumentarVolume com valor inválido
  controle1.aumentarVolume(150); // Saída: "Erro: volume deve estar entre 0 e 100."
  
  // Exibe o objeto controle1 no console
  console.log(controle1);
  
  // Chamada do método estático diretamente pela classe (sem instância)
  console.log(ControleRemoto.soma(2, 4)); // Saída: 6
  