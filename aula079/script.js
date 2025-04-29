function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
  }
  
  Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
      log(`Saldo insuficiente R$ ${this.saldo.toFixed(2)}`);
      return;
    }
    this.saldo -= valor;
    this.verSaldo();
  };
  
  Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
  };
  
  Conta.prototype.verSaldo = function () {
    log(`Agência/Conta: ${this.agencia} / ${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`);
  };
  
  function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
  }
  ContaCorrente.prototype = Object.create(Conta.prototype);
  ContaCorrente.prototype.constructor = ContaCorrente;
  
  ContaCorrente.prototype.sacar = function (valor) {
    if (valor > this.saldo + this.limite) {
      log(`Saldo insuficiente R$ ${this.saldo.toFixed(2)} (limite: R$ ${this.limite.toFixed(2)})`);
      return;
    }
    this.saldo -= valor;
    this.verSaldo();
  };
  
  function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);  
  }
  ContaPoupanca.prototype = Object.create(Conta.prototype);
  ContaPoupanca.prototype.constructor = ContaPoupanca;
  
  function log(msg) {
    const logBox = document.getElementById('log');
    logBox.textContent += msg + '\n';
  }
  
  const contaCorrente = new ContaCorrente(7269, 204367, 0, 100);
  const contaPoupanca = new ContaPoupanca(7269, 204369, 0);
  