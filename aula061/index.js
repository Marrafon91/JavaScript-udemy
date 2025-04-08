// Função geradora simples que retorna valores pausadamente
function* geradora1() {
    // Primeira pausa da função
    yield "Valor 1";
  
    // Segunda pausa da função
    yield "Valor 2";
  
    // Terceira pausa da função
    yield "Valor 3";
  }
  
  // Função geradora com loop infinito (gerador de números)
  function* geradora2() {
    let i = 0;
  
    while (true) { // Loop infinito
      yield i; // Retorna o valor atual de i e pausa
      i++; // Incrementa i para a próxima chamada
    }
  }
  
  // Função geradora que retorna três valores fixos
  function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
  }
  
  // Função geradora que chama outra geradora usando "yield*"
  function* geradora4() {
    yield* geradora3(); // Chama a geradora3() e retorna seus valores
    yield 3;
    yield 4;
    yield 5;
  }
  
  // Criando um iterador a partir da geradora4()
  const g4 = geradora4();
  
  // Função geradora que retorna funções como valores
  function* geradora5() {
    yield function () {
      console.log("Vim do y1"); // Função anônima retornada pelo primeiro yield
    };
  
    /* Se descomentar, o return finaliza a execução da geradora */
    /* return function(){
      console.log("Vim do return") // Return para o código
    } */
  
    yield function () {
      console.log("Vim do y2"); // Função anônima retornada pelo segundo yield
    };
  }
  
  // Criando um iterador a partir da geradora5()
  const g5 = geradora5();
  
  // Pegando as funções geradas pelo yield e armazenando em variáveis
  const func1 = g5.next().value; // Primeiro yield retorna uma função
  const func2 = g5.next().value; // Segundo yield retorna outra função
  
  // Chamando as funções geradas
  func1(); // Executa a primeira função -> "Vim do y1"
  func2(); // Executa a segunda função -> "Vim do y2"
  
  // Percorrendo os valores gerados por geradora4() com um loop for...of
  for (let valor of g4) {
    console.log(valor); // Exibe 0, 1, 2 (da geradora3), depois 3, 4, 5
  }
  
  // Criando um iterador a partir da geradora2() (números infinitos)
  const g2 = geradora2();
  
  // Chamando next() várias vezes para obter os próximos valores da geradora2()
  console.log(g2.next().value); // 0
  console.log(g2.next().value); // 1
  console.log(g2.next().value); // 2
  console.log(g2.next().value); // 3
  console.log(g2.next().value); // 4
  console.log(g2.next().value); // 5
  console.log(g2.next().value); // 6
  
  // Criando um iterador a partir da geradora1()
  const g1 = geradora1();
  
  // Percorrendo os valores gerados por geradora1() usando for...of
  for (let valor of g1) {
    console.log(valor); // Exibe "Valor 1", "Valor 2", "Valor 3"
  }
  
 /*  Explicação dos conceitos usados no código:
✅ Funções Geradoras (function*)

As funções geradoras permitem criar iteradores pausáveis.

Elas usam yield para retornar valores sem finalizar a função.

✅ Yield e Iteração

yield pausa a execução da função e retorna um valor.

Ao chamar next(), a execução continua a partir do último yield.

✅ Chamando outra geradora (yield*)

yield* permite que uma geradora chame outra geradora.

✅ Gerando funções dentro de geradoras

Uma geradora pode yield funções e elas podem ser chamadas depois. */