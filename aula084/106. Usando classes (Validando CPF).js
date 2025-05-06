// Classe responsável por validar um CPF
class ValidaCPF {
    constructor(cpfEnviado) {
      this.cpfEnviado = cpfEnviado;
  
      // Cria a propriedade cpfLimpo removendo tudo que não for número (pontuação, espaços etc.)
      Object.defineProperty(this, "cpfLimpo", {
        enumerable: true,       // A propriedade será listada em loops
        writable: false,        // Não poderá ser alterada depois
        configurable: false,    // Não poderá ser reconfigurada ou deletada
        value: cpfEnviado.replace(/\D+/g, ""), // Remove tudo que não for dígito
      });
    }
  
    // Verifica se todos os dígitos do CPF são iguais (ex: 111.111.111-11), o que invalida o CPF
    éSequência() {
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
  
    // Gera um novo CPF com base nos primeiros 9 dígitos e verifica os dois últimos (dígitos verificadores)
    geraNovoCpf() {
      const cpfSemDigitos = this.cpfLimpo.slice(0, -2); // Remove os dois últimos dígitos
      const digito1 = ValidaCPF.geraDigito(cpfSemDigitos); // Gera o primeiro dígito verificador
      const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1); // Gera o segundo dígito
  
      // Monta o CPF completo com os dois dígitos gerados
      this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }
  
    // Método estático: calcula um dígito verificador com base nos números informados
    static geraDigito(cpfSemDigitos) {
      let total = 0;
      let reverso = cpfSemDigitos.length + 1;
  
      // Multiplica cada número pela contagem regressiva (ex: 10, 9, 8...)
      for (let stringNumerica of cpfSemDigitos) {
        total += reverso * Number(stringNumerica);
        reverso--;
      }
  
      const digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : "0"; // Se o resultado for maior que 9, retorna "0"
    }
  
    // Método que valida o CPF
    valida() {
      if (!this.cpfLimpo) return false;              // CPF inexistente
      if (typeof this.cpfLimpo !== "string") return false; // CPF não é uma string
      if (this.cpfLimpo.length !== 11) return false; // CPF não tem 11 dígitos
      if (this.éSequência()) return false;           // CPF com todos os dígitos iguais
      this.geraNovoCpf();                            // Gera o CPF válido com base na lógica
  
      // Compara o CPF gerado com o CPF enviado (ambos sem pontuação)
      return this.novoCPF === this.cpfLimpo;
    }
  }
  
  // Testando a classe com um CPF válido
  let validacpf = new ValidaCPF("070.987.720-03");
  
  // Outro exemplo: CPF inválido (com todos os dígitos iguais)
  // validacpf = new ValidaCPF('999.999.999-99');
  
  // Verifica se o CPF é válido e imprime no console
  if (validacpf.valida()) {
    console.log("CPF Válido");
  } else {
    console.log("CPF inválido");
  }
  