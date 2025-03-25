/* 
try {
    console.log(naoExisto) // Tentativa de acessar uma variável inexistente
} catch(err) {
    console.log('naoExisto nao existe.') // Mensagem amigável informando o erro
    console.log(err) // Exibe o erro completo no console
}  
*/

/* 
Função soma que recebe dois parâmetros e verifica se ambos são números.
Se algum deles não for, a função lança um erro.
*/
function soma(x, y)  {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros') // Lança um erro caso os valores não sejam numéricos
    }
    return x + y // Retorna a soma dos valores
}   

/* 
Bloco try...catch para tratar possíveis erros ao chamar a função soma.
*/
try {
    console.log(soma(1, 2)) // Chamada válida da função, imprimirá 3 no console
    console.log(soma('1', 2)) // Chamada inválida, pois '1' é uma string e causará erro

} catch(err) {
    // console.log(err) // Poderia exibir o erro técnico no console
    console.log('Alguma coisa mais amigavel para nosso usuario na tela') // Mensagem amigável de erro
}  
