function jogarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

let somasPares = [];
let tentativas = 0;

while (somasPares.length < 10) {
    let dado1 = jogarDado();
    let dado2 = jogarDado();
    let soma = dado1 + dado2;
    tentativas++;

    if (soma % 2 === 0) {
        somasPares.push(soma);
        console.log(`Soma dos dados: ${dado1} + ${dado2} = ${soma} (PAR)`);
    } else {
        console.log(`Soma dos dados: ${dado1} + ${dado2} = ${soma} (ÍMPAR) - Ignorado`);
    }
}

console.log(`\nSomas pares obtidas: ${somasPares.join(", ")}`);
console.log(`Total de tentativas: ${tentativas}`);
