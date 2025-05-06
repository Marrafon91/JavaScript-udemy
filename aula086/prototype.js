function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('Bad Value!');
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Frase1", rand(1, 3))
 .then(resposta => {
    console.log(resposta)
    return esperaAi('Frase2', rand(1, 3));
 })
 .then(resposta => {
    console.log(resposta)
    return esperaAi(2222, rand(1, 3));
 })
 .then(resposta => {
    console.log(resposta);
 })
 .then(() => {
    console.log('Eu serei o ultimo a ser exibido.');
 })
 .catch(e => {
    console.log('ERRO', e);
 });

 console.log('Isso aqui sera exibido antes de qualquer Promise');
