/*
Guilherme Marrafon tem 33 anos, pesa 93kg
tem 1.8 de altura e seu IMC é de 13.12
Guilherme Marrafon nasceu em 1991
*/
// template string = string com variavel dentro dela
const nome = 'Guilherme'
const sobrenome = 'Marrafon'
const idade = 33
const peso = 93
const alturaEmM = 1.80
let imc = peso / (alturaEmM * alturaEmM)
let anoNascimento = 2024 - idade

console.log(nome,sobrenome,'tem',idade,'anos pesa',peso,'kg e tem',alturaEmM,'de altura e seu IMC é',imc.toFixed(2),'e nasceu em',anoNascimento,)

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos e pesa '+ peso +'kg')// concatenação de strings

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}kg`)
// template string = string com variavel dentro dela
console.log(`tem ${alturaEmM}m e seu IMC é ${imc.toFixed(2)}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)
