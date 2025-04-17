// Adicione a propriedade janelas no onibus, com o valor 20;
// Delete a propriedade rodas;
// Imprima a propriedade janelas no console;

const onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2
};
delete onibus.rodas
onibus.janelas = 20
/* let onibus1 = 'janelas'
let onibus2 = 20
onibus[onibus1] = onibus2 */
console.log(onibus)
console.log(onibus.passageiros)
console.log(onibus.portas)
console.log(onibus.janelas)
console.log(onibus.rodas)