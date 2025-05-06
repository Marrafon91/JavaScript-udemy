class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado`);
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está Desligado`);
      return;
    }

    this.ligado = false;
  }
}

// const d1 = new DispositivoEletronico('Smartphone');
// console.log(d1);

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }

  }

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar() {
    console.log("Olha você alterou o método ligar.");
  }

  falaOi() {
    console.log("Oi");
  }
}

const s1 = new Smartphone("iPhone", "Preto", "15 PRO MAX");
console.log(s1);

const t1 = new Tablet("iPad", true);
t1.ligar();
t1.falaOi();
