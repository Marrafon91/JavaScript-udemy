const tarefas = [
    { texto: 'Estudar JavaScript' },
    { texto: 'Fazer exercícios de lógica' },
    { texto: 'Criar um projeto prático' },
    { texto: 'Revisar conceitos de DOM' }
];

const container = document.querySelector('.container')
const lista = document.querySelector('.lista')
lista.innerText = ''


tarefas.forEach(tarefa => {
    const {texto} = tarefa
    const novoElemento = document.createElement('li')
    novoElemento.innerText = texto
    container.appendChild(novoElemento)
    
})
container.appendChild(lista)

