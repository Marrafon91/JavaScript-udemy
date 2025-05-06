// Classe base que representa um dispositivo eletrônico genérico
class DispositivoEletronico {
    constructor(nome) {
      this.nome = nome;     // Define o nome do dispositivo
      this.ligado = false;  // Por padrão, o dispositivo começa desligado
    }
  
    // Método para ligar o dispositivo
    ligar() {
      if (this.ligado) {  // Verifica se já está ligado
        console.log(`${this.nome} já está ligado`);
        return;           // Interrompe a função se já estiver ligado
      }
  
      this.ligado = true; // Liga o dispositivo
    }
  
    // Método para desligar o dispositivo
    desligar() {
      if (!this.ligado) { // Verifica se já está desligado
        console.log(`${this.nome} já está Desligado`);
        return;           // Interrompe a função se já estiver desligado
      }
  
      this.ligado = false; // Desliga o dispositivo
    }
  }
  
  // Subclasse que representa um Smartphone, herda de DispositivoEletronico
  class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
      super(nome);           // Chama o construtor da classe pai (DispositivoEletronico)
      this.cor = cor;        // Define a cor do smartphone
      this.modelo = modelo;  // Define o modelo do smartphone
    }
  }
  
  // Subclasse que representa um Tablet, herda de DispositivoEletronico
  class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
      super(nome);           // Chama o construtor da classe pai
      this.temWifi = temWifi; // Define se o tablet tem Wi-Fi
    }
  
    // Sobrescreve o método ligar da classe pai
    ligar() {
      console.log("Olha você alterou o método ligar."); // Apenas imprime uma mensagem diferente
    }
  
    // Método exclusivo da classe Tablet
    falaOi() {
      console.log("Oi"); // Imprime "Oi"
    }
  }
  
  // Cria uma instância de Smartphone com nome, cor e modelo
  const s1 = new Smartphone("iPhone", "Preto", "15 PRO MAX");
  console.log(s1); // Exibe o objeto Smartphone criado
  
  // Cria uma instância de Tablet com nome e se tem Wi-Fi
  const t1 = new Tablet("iPad", true);
  t1.ligar();     // Chama o método sobrescrito ligar
  t1.falaOi();    // Chama o método exclusivo falaOi
  