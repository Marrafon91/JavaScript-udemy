// Função que gera um número aleatório entre min e max (em milissegundos)
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  // Função que retorna uma Promise que simula algo assíncrono (como carregar uma página ou dado de API)
  function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof msg !== "string") {
          reject('Cai no Erro'); // Se não for string, rejeita a Promise
          return;
        }
        // Se for string, resolve a Promise com a mensagem em maiúscula + complemento
        resolve(msg.toUpperCase() + ' PASSEI NA PROMISE');
      }, tempo);
    });
  }
  
  // Função que simula o carregamento de uma página
  function baixaPagina() {
    const emCache = true;
  
    // Se estiver em cache, retorna uma Promise resolvida imediatamente
    if (emCache) {
      return Promise.resolve('Página em cache');
    } else {
      // Caso contrário, simula o "download" da página com atraso
      return esperaAi('Baixei a página', 3000);
    }
  
    /*
    Alternativa: usar Promise.reject se quiser que cache seja considerado erro:
  
    if (emCache) {
      return Promise.reject('Página em cache');
    } else {
      return esperaAi('Baixei a página', 3000);
    }
    */
  }
  
  // Chama a função e trata o resultado
  baixaPagina()
    .then(dadosPagina => {
      console.log(dadosPagina); // Exibe a mensagem da Promise resolvida
    })
    .catch(e => console.log('ERRO:', e)); // Exibe erro se houver
  
  //--------------------------------------
  // PROMISES EM GRUPO COM .all E .race
  //--------------------------------------
  
  // Criação de um array de Promises simulando requisições
  const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi(1000, rand(1, 5)) // Essa irá causar erro pois não é string
  ];
  
  // --- Promise.all: espera TODAS resolverem, ou uma rejeitar (erro)
  Promise.all(promises)
    .then(valores => {
      console.log('Promise.all resolvida:', valores);
    })
    .catch(erro => {
      console.log('Promise.all ERRO:', erro); // Se uma falhar, cai aqui
    });
  
  // --- Promise.race: a primeira que resolver ou rejeitar é a usada
  Promise.race(promises)
    .then(valor => {
      console.log('Promise.race resolvida:', valor);
    })
    .catch(erro => {
      console.log('Promise.race ERRO:', erro); // Se a primeira Promise falhar, cai aqui
    });
  

// Conceito	                                Explicação
// Promise.resolve()	                    Retorna uma Promise já resolvida imediatamente
// Promise.reject()	                        Retorna uma Promise já rejeitada
// Promise.all()	                        Espera TODAS as Promises resolverem. Se uma falhar, entra no .catch()
// Promise.race()	                        Retorna a primeira Promise que resolver ou rejeitar

// reject em setTimeout	Serve para simular erro (ex: valor inválido)