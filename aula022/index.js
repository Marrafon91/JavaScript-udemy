/*
Operadores Lógicos
&& -> AND - > E -> todas Expressoes precisam ser verdadeiras
|| -> OR -> OU
! -> NOT -> NÃo
*/

const expressaoAnd = true && true && true && true;
const expressaoOr = false || false || true || false;

const usuario = 'Guilherme' // form
const senha = '123456' // form

const vailogar = usuario === 'Guilherme' && senha === '123456'
console.log(vailogar)

console.log(!false)
