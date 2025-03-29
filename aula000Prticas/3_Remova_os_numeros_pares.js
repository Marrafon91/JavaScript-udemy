/* 1. Preencha a variável semPares apenas com números ímpares;

2. Utilize uma estrutura de loop para percorrer o array arr;

3. Verifique se o número é ímpar e coloque no array semPares;

4. No final, exiba o array semPares com console.log; */

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares = []

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
        semPares.push(arr[i])
    }
}

console.log(semPares)