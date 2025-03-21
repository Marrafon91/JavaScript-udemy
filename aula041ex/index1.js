/* Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number)
retorne true se a image estiver no modo paisagem */

// Declaração das variáveis 'largura' e 'altura' com valores numéricos
let largura = 1920;  // A largura da imagem (1920 unidades)
let altura = 1080;   // A altura da imagem (1080 unidades)

// Função chamada 'ePaisagem', que recebe dois parâmetros: 'largura' e 'altura'
function ePaisagem(largura, altura) {
    // Retorna 'true' se a largura for maior que a altura, indicando que a imagem está no modo paisagem
    // Caso contrário, retorna 'false' (implicado, já que em JavaScript uma comparação booleana retorna true ou false diretamente)
    return largura > altura; 
}

// Chamada da função 'ePaisagem' passando os valores de 'largura' e 'altura' definidos acima
// A função vai retornar 'true' ou 'false' com base na comparação da largura com a altura
console.log(ePaisagem(largura, altura));  // Exibe no console o resultado da comparação (no caso, 'true')


//====================ArrowFunction=====================//

const iPaisagem = (largura, altura) => largura > altura;
console.log(iPaisagem (1080, 1920));