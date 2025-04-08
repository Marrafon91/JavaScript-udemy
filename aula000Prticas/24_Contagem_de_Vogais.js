/* Escreva uma função chamada countVowels que recebe uma string como argumento.

A função deve contar o número de vogais presentes na string (considerando letras maiúsculas e minúsculas).

A função deve retornar o total de vogais encontradas. */

function countVogals(texto) {
    const vowels = "aeiouAEIOU"; 
    let conta = 0; 
  
    for (let contador of texto) { 
      if (vowels.includes(contador)) { 
        conta++; 
      }
    }
  
    return conta; 
  }
  
  
  console.log(countVogals("JavaScript")); 
  console.log(countVogals("Hello, World!")); 
  console.log(countVogals("Guilherme Marrafon")); 
  console.log(countVogals("xyz")); 