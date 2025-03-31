// Função rand: gera um número aleatório dentro de um intervalo (padrão: 1000 a 3000 ms)
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
  }
  
  // Funções assíncronas que executam um callback após um tempo aleatório
  function f1(callback) {
    setTimeout(function () {
      console.log("f1");
      if (callback) callback(); // Executa o callback, se existir
    }, rand());
  }
  
  function f2(callback) {
    setTimeout(function () {
      console.log("f2");
      if (callback) callback(); // Executa o callback, se existir
    }, rand());
  }
  
  function f3(callback) {
    setTimeout(function () {
      console.log("f3");
      if (callback) callback(); // Executa o callback, se existir
    }, rand());
  }
  
  // Primeira maneira de encadear funções usando callbacks nomeados
  function f1Callback() {
    f2(f2Callback);
  }
  
  function f2Callback() {
    f3(f3Callback);
  }
  
  function f3Callback() {
    console.log("Olá, mundo!");
  }
  
  // Chamando f1 e iniciando a sequência com callbacks nomeados
  f1(f1Callback);
  
  // Segunda maneira: usando funções anônimas diretamente
  f1(function () {
    f2(function () {
      f3(function () {
        console.log("Olá, Mundo!");
      });
    });
  });
  