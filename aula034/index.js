// Aula 034 - Estrutura de repetição for
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration
//console.log('Linha 00');
//console.log('Linha 01');
//console.log('Linha 02');
//console.log('Linha 03');
//console.log('Linha 04');
//console.log('Linha 05');

//  i - index
// for (let i = 0; i <= 10; i ++) {
//    const par = i % 2 === 0 ? 'par' : 'ímpar';
//    console.log(i, par);
//   
//
//}
const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Melancia', 'Laranja', 'Morango', 'Abacaxi', 'Limão', 'Manga'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}, ${frutas[i]}`);
}