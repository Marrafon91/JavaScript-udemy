let varA = 'A'
let varB = 'B'
let varC = 'C'
const temp = varA

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC); // B C A

/*const temp = varA
varA = varB
varB = varC
varC = temp*/

