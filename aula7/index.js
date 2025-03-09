/*
Guilherme Marrafon tem 33 anos, pesa 93kg
tem 1.8 de altura e seu IMC é de 13.12
Guilherme Marrafon nasceu em 1991
*/
const nome = 'Guilherme'
const sobrenome = 'Marrafon'
const idade = 33
const peso = 93
const altura = 1.80
let imc = peso / (altura * altura)
let anoNascimento = 1991

console.log(nome,sobrenome,'tem',idade,'anos','pesa',peso,'kg e tem',altura,'e seu IMC é',imc.toFixed(2),'e nasceu em',anoNascimento,) 
