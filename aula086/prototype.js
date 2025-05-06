// Função que retorna um número aleatório entre `min` e `max`, em milissegundos
function rand(min, max) {
   min *= 1000; // Converte segundos para milissegundos
   max *= 1000;
   return Math.floor(Math.random() * (max - min) + min); // Gera número aleatório dentro do intervalo
 }
 
 // Função que simula uma operação assíncrona (como uma requisição, por exemplo)
 function esperaAi(msg, tempo) {
   return new Promise((resolve, reject) => {
     // Verifica se a mensagem é uma string; se não for, rejeita a Promise
     if (typeof msg !== 'string') reject('Bad Value!');
     
     // Aguarda o tempo definido e resolve a Promise com a mensagem
     setTimeout(() => {
       resolve(msg);
     }, tempo);
   });
 }
 
 // Início da cadeia de Promises
 esperaAi("Frase1", rand(1, 3)) // Chama a função com tempo aleatório entre 1 e 3 segundos
   .then(resposta => {
     console.log(resposta); // Exibe 'Frase1' quando a Promise for resolvida
     return esperaAi('Frase2', rand(1, 3)); // Retorna nova Promise
   })
   .then(resposta => {
     console.log(resposta); // Exibe 'Frase2'
     return esperaAi(2222, rand(1, 3)); // Aqui vai dar erro porque o valor não é string
   })
   .then(resposta => {
     console.log(resposta); // Este trecho será *ignorado* se o anterior der erro
   })
   .then(() => {
     console.log('Eu serei o ultimo a ser exibido.'); // Também será ignorado em caso de erro
   })
   .catch(e => {
     console.log('ERRO', e); // Captura qualquer erro gerado em qualquer .then acima
   });
 
 console.log('Isso aqui sera exibido antes de qualquer Promise'); 
 // Essa linha é executada imediatamente, antes das Promises, pois elas são assíncronas
 