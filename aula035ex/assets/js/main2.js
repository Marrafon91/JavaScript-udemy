const elementos = [
    {tag: 'p', texto: 'Hello World'},
    {tag: 'div', texto: 'im studding'},
    {tag: 'section', texto: 'HTML is easy'},
    {tag: 'footer', texto: 'Im a footer'}
    
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag)
    tagCriada.innerText = texto
    div.appendChild(tagCriada)
}

container.appendChild(div)