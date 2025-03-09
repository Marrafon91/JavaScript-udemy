let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

/*const temp = varA
[varA, varB, varC] = [varB, varC, varA];*/

const temp = varA
varA = varB
varB = varC
varC = temp
console.log(varA, varB, varC); // B C A

