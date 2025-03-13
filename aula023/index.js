/*
&& -> false && true -> false
|| -> true || false -> verdadeiro

FALSY
*false
0
'' "" `` string vazia
null / undefined
NaN 
*/
//const corUsuario = 'branco'
//const corPadrao = corUsuario || 'azul'

//console.log(corPadrao)

const a = 0
const b = null
const c = 'false'
const d = false
const e = NaN

console.log (a || b || 'Guilherme' || c || d || e)