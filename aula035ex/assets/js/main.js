const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
    
];
const container = document.querySelector('.container')

elementos.forEach(e => {
    const {tag, texto} = e
    const novoElemento = document.createElement(tag)
    novoElemento.innerText = texto
    container.appendChild(novoElemento)
})