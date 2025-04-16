// Cria um array chamado a1 com vários números
const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// Cria uma variável chamada total e inicializa com zero
let total = 0;

// Usa o método forEach para percorrer cada valor do array a1
// Para cada elemento (chamado de 'valor'), ele é somado à variável total
a1.forEach(valor => {
    total += valor; // Equivalente a: total = total + valor;
});

// Exibe o resultado final da soma no console
console.log(total); // Deve mostrar: 450



