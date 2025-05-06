// Classe responsável por validar os dados de um formulário
class ValidaFormulario {
  constructor() {
    // Seleciona o formulário com a classe 'formulario'
    this.formulario = document.querySelector('.formulario');
    // Chama o método que adiciona os eventos
    this.eventos();
  }

  // Método que adiciona os eventos ao formulário
  eventos() {
    // Quando o formulário for enviado, executa o método handleSubmit
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  // Método executado no envio do formulário
  handleSubmit(e) {
    e.preventDefault(); // Impede o envio do formulário padrão (para validar primeiro)
    const camposValidos = this.camposSaoValidos(); // Valida os campos
    const senhasValidas = this.senhasSaoValidas(); // Valida as senhas

    // Se todos os campos e senhas forem válidos, envia o formulário
    if (camposValidos && senhasValidas) {
      alert('Formulário enviado.');
      this.formulario.submit(); // Envia o formulário
    }
  }

  // Método que valida se as senhas são iguais e se têm tamanho válido
  senhasSaoValidas() {
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    // Verifica se as senhas são diferentes
    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
    }

    // Verifica o tamanho da senha
    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
    }

    return valid;
  }

  // Método que valida todos os campos com a classe 'validar'
  camposSaoValidos() {
    let valid = true;

    // Remove mensagens de erro anteriores
    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    // Valida cada campo com a classe 'validar'
    for (let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText; // Pega o nome do campo (label)

      // Verifica se o campo está vazio
      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      // Se o campo for CPF, valida com método específico
      if (campo.classList.contains('cpf')) {
        if (!this.validaCPF(campo)) valid = false;
      }

      // Se o campo for usuário, valida com método específico
      if (campo.classList.contains('usuario')) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }

    return valid;
  }

  // Método que valida o campo de nome de usuário
  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    // Verifica o tamanho do nome de usuário
    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    // Verifica se o nome de usuário contém apenas letras e números
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
      valid = false;
    }

    return valid;
  }

  // Método que valida o CPF usando uma classe auxiliar (ValidaCPF)
  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value); // Instancia a classe ValidaCPF

    if (!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido.');
      return false;
    }

    return true;
  }

  // Método que cria uma mensagem de erro e mostra abaixo do campo
  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text'); // Adiciona classe para estilização
    campo.insertAdjacentElement('afterend', div); // Insere a mensagem depois do campo
  }
}

// Instancia a classe para ativar a validação
const valida = new ValidaFormulario();
