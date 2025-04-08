// Função recursiva que conta de 5 em 5 até 500
function recursiva(max) {
  console.log(max); // Exibe o valor atual no console

  // Condição de parada: se max for maior ou igual a 500, a recursão para
  if (max >= 500) return;

  max += 5; // Incrementa 5 ao valor atual

  recursiva(max); // Chama a função novamente com o novo valor de max
}

// Chamada inicial da função com o valor 0
recursiva(0);
console.log("Código com Decremento");

//Código com Decremento:

function recursivaDecrescente(min) {
  console.log(min); // Exibe o valor atual no console

  // Condição de parada: quando min for menor ou igual a 0, a função para
  if (min <= 0) return;

  min -= 5; // Decrementa 5 a cada chamada

  recursivaDecrescente(min); // Chama a função novamente com o novo valor de min
}

// Chamada inicial começando de 500
recursivaDecrescente(500);
