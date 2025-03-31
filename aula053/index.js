// Declara uma função chamada retornaFuncao que recebe um parâmetro nome
function retornaFuncao(nome) {
    // Retorna uma função anônima
    return function () {
      return nome; // Essa função interna retorna o nome recebido como argumento
    };
  }
  
  // Chamamos retornaFuncao passando "Guilherme", e armazenamos o retorno na variável funcao
  const funcao = retornaFuncao("Guilherme");
  
  // Chamamos retornaFuncao passando "Oliveira", e armazenamos o retorno na variável funcao2
  const funcao2 = retornaFuncao("Oliveira");
  
  // Usamos console.dir para inspecionar as funções retornadas
  console.dir(funcao);
  console.dir(funcao2);
  
  // Chamamos as funções e imprimimos os valores retornados
  console.log(funcao(), funcao2()); // "Guilherme Oliveira"
  