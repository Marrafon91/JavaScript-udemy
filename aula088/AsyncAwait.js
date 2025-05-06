function rand(min = 0, max = 3) {
    min *= 1000; // Converte os valores para milissegundos
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min); // Retorna um tempo aleatório entre min e max
  }
  

  function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof msg !== "string") { // Se msg não for uma string, rejeita a promise
          reject("Cai no Erro");
          return;
        }
  
        // Se tudo estiver certo, transforma a mensagem em maiúsculas e resolve
        resolve(msg.toUpperCase() + " - PASSEI NA PROMISE");
        return;
      }, tempo); // Aguarda o tempo definido
    });
  }
  

  async function executa() {
    try {
      // Aguarda a promise da Fase 1
      const fase1 = await esperaAi('Fase 1', rand());
      console.log(fase1);
  
      // Aguarda a promise da Fase 2
      const fase2 = await esperaAi('Fase 2', rand());
      console.log(fase2);
  
      // Aguarda a promise da Fase 3
      const fase3 = await esperaAi('Fase 3', rand());
      console.log(fase3);
  
      // Mensagem final
      console.log('Terminamos na fase 3');
    } catch(e) {
      // Captura e exibe qualquer erro que ocorrer
      console.log(e);
    }
  }
  
  executa(); // Chama a função
  

/* 
Pending -> Pendente (ainda não resolveu nem rejeitou).
Fulfilled -> Resolvida com sucesso (resolve).
Rejected -> Rejeitada (reject).
*/


// esperaAi('Fase 1', rand())
// .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', rand()); // Vai para a próxima fase
// })
// .then(fase => {
//     console.log(fase);
//     return esperaAi('Fase 3', rand()); // Vai para a próxima fase
// })
// .then(fase => {
//     console.log(fase);
//     return fase; // Retorna o valor final
// })
// .then(fase => {
//     console.log('Terminamos na fase 3', fase); // Mensagem final
// })
// .catch(e => console.log(e)); // Captura e exibe erros
