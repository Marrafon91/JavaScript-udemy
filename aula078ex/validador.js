function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      enumerable: true,
      get: function () {
        return cpfEnviado.replace(/\D+/g, "");
      },
    });
  }
  
  ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === "undefined") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;
  
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
  
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
  };
  
  ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
  
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += regressivo * Number(val);
      regressivo--;
      return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  };
  
  ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  };
  // const cpf = new ValidaCPF("705.484.450-52");
  
  document.getElementById('cpfForm').addEventListener('submit',(e) => {
    e.preventDefault();
    const cpfInput = document.getElementById('cpf').value;
    const cpf = new ValidaCPF(cpfInput);

    const resultado = document.getElementById('resultado');
    if (cpf.valida()) {
        resultado.textContent = 'CPF Válido!';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'CPF Inválido!';
        resultado.style.color = 'red';
    }
});