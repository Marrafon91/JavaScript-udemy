// IIFE -> Immediately Invoked Function Expression (Função Autoexecutável)
(function (idade, peso, altura) {
    // Variável local dentro do escopo da IIFE
    const sobrenome = "Marrafon";
  
    // Função que cria um nome completo concatenando um sobrenome
    function criaNome(nome) {
      return `${nome} ${sobrenome}`;
    }
  
    // Função que chama `criaNome` e exibe no console
    function falaNome() {
      console.log(criaNome("Guilherme"));
    }
  
    // Chama a função para exibir o nome completo
    falaNome();
  
    // Exibe os dados recebidos como parâmetro
    console.log(`${idade} anos, ${peso}KG, ${altura} metros`);
  })(30, 92, 1.80);
  