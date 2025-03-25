// Função que retorna a hora formatada
function retornaHora(data) {
    // Verifica se o parâmetro 'data' foi passado e se não é uma instância de Date
    if (data && !(data instanceof Date)) {
      console.log("Não é uma instância de Date");
      throw new TypeError("Esperando instância de Date");
    }
  
    // Se 'data' não for passado, cria uma nova instância de Date com a data atual
    if (!data) {
      data = new Date();
    }
  
    // Retorna a hora formatada no padrão brasileiro (24 horas)
    return data.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
  }
  
  try {
    // Criando uma data corretamente
    const data = new Date("1970-01-01T13:24:15"); // Corrigindo o formato da data
  
    // Chamando a função com a data criada
    const hora = retornaHora(data);
    console.log(hora); // Exibe a hora no console
  } catch (e) {
    console.log("Erro:", e.message); // Agora o erro será tratado corretamente
  } finally {
    console.log("Tenha um bom dia"); // Essa mensagem será exibida sempre, independentemente de erro
  }
  
  // Exemplo de chamadas válidas da função
  const horaAtual = retornaHora(); // Obtendo a hora atual
  console.log(horaAtual);
  
  retornaHora(new Date()); // Chamando a função com a data atual
  
  /* 
  try {
      console.log('Abri um arquivo'); // Simulação de abertura de um arquivo
      console.log('Manipulei o arquivo e gerou erro'); // Simulação de manipulação do arquivo
      console.log('Fechei o arquivo'); // Simulação de fechamento do arquivo
  
      // Bloco try aninhado
      try {
          console.log(b); // Tentando acessar uma variável não definida (isso gera erro)
      } catch (e) {
          console.log('Deu erro'); // Mensagem exibida se ocorrer erro no bloco try aninhado
      } finally {
          console.log('Também sou FINALLY'); // Esse bloco sempre será executado
      }
  
  } catch (e) {
      console.log('Tratando o erro'); // Esse bloco será executado se ocorrer erro no primeiro try
  } finally {
      console.log('FINALLY: Eu sempre sou executado'); // Esse bloco sempre será executado
  }
  */
  