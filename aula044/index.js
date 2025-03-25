// Função que retorna a hora atual formatada no padrão brasileiro (24 horas)
function mostraHora() {
    let data = new Date(); // Cria um novo objeto Date com a data e hora atuais
  
    return data.toLocaleTimeString("pt-BR", {
      hour12: false, // Define o formato de 24 horas (sem AM/PM)
    });
  }
     
  // Criando um intervalo que executa a função a cada 1 segundo (1000ms)
  const timer = setInterval(function () {
    console.log(mostraHora()); // Exibe a hora atual no console a cada segundo
  }, 1000);
  
  // Após 10 segundos (10000ms), o setTimeout executa a função que para o setInterval
  setTimeout(function () {
    clearInterval(timer); // Para a repetição do setInterval
  }, 10000);
  
  // Após 5 segundos (5000ms), o setTimeout exibe a mensagem "Olá Mundo"
  setTimeout(function () {
    console.log("Olá Mundo"); // Exibe a mensagem após 5 segundos
  }, 5000);
  