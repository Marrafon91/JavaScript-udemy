// Função que simula o lançamento de um dado, retornando um número aleatório de 1 a 6
function jogarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

// Array para armazenar as somas pares dos dados
let somasPares = [];

// Contador para rastrear o número de tentativas até atingir 10 somas pares
let tentativas = 0;

// Loop continua até que 10 somas pares sejam armazenadas
while (somasPares.length < 10) {
    // Simula o lançamento de dois dados
    let dado1 = jogarDado();
    let dado2 = jogarDado();
    
    // Calcula a soma dos valores obtidos nos dois dados
    let soma = dado1 + dado2;

    // Incrementa o número de tentativas
    tentativas++;

    // Verifica se a soma é um número par
    if (soma % 2 === 0) {
        // Se for par, adiciona ao array somasPares
        somasPares.push(soma);
        console.log(`Soma dos dados: ${dado1} + ${dado2} = ${soma} (PAR)`);
    } else {
        // Se for ímpar, apenas exibe no console e ignora a soma
        console.log(`Soma dos dados: ${dado1} + ${dado2} = ${soma} (ÍMPAR) - Ignorado`);
    }
}

// Exibe as 10 somas pares obtidas
console.log(`\nSomas pares obtidas: ${somasPares.join(", ")}`);

// Exibe o número total de tentativas até conseguir 10 somas pares
console.log(`Total de tentativas: ${tentativas}`);
