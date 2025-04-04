// Função que retorna o valor absoluto de um número
function positivoNegativo(numNegativo) {
    return Math.abs(numNegativo);
}

// Testando a função com diferentes valores
console.log(positivoNegativo(-10));   // 10 (transforma em positivo)
console.log(positivoNegativo(10));    // 10 (permanece igual)
console.log(positivoNegativo(0));     // 0 (zero continua zero)
console.log(positivoNegativo(-10.78)); // 10.78 (número decimal negativo vira positivo)
console.log(positivoNegativo(-25));  // 25
console.log(positivoNegativo(7.5));  // 7.5
console.log(positivoNegativo(-3.1415)); // 3.1415
console.log(positivoNegativo("12")); // 12 (converte string numérica antes de calcular)
console.log(positivoNegativo("-9")); // 9 (converte string numérica negativa)
console.log(positivoNegativo(null)); // 0 (null tratado como 0)
console.log(positivoNegativo("abc")); // NaN (não consegue converter para número)
