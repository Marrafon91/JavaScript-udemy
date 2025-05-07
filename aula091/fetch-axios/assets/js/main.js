// Versão usando fetch (comentada, mas funcional também):
// fetch('pessoas.json')
// .then(resposta => resposta.json()) // Converte a resposta para JSON
// .then(json => carregaElementosNaPagina(json)); // Chama a função para exibir os dados


// Versão usando Axios (mais moderna e prática, já converte JSON automaticamente)
axios('pessoas.json') // Faz uma requisição GET ao arquivo pessoas.json
  .then(resposta => carregaElementosNaPagina(resposta.data)); 
  // O Axios já converte a resposta para objeto JSON, que está em resposta.data


// Função que cria e insere uma tabela HTML com os dados das pessoas
function carregaElementosNaPagina(json) {
    const table = document.createElement('table'); // Cria um elemento <table>

    // Loop que percorre cada objeto (pessoa) no array JSON
    for (let pessoa of json) {
        const tr = document.createElement('tr'); // Cria uma nova linha da tabela (<tr>)

        // Cria a primeira célula (<td>) com o nome
        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome; // Insere o nome da pessoa
        tr.appendChild(td1); // Adiciona a célula na linha

        // Cria a segunda célula com a idade
        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        // Cria a terceira célula com o salário
        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);

        // Adiciona a linha completa à tabela
        table.appendChild(tr);
    }

    // Seleciona o elemento onde a tabela será exibida (ex: <div class="resultado"></div>)
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table); // Insere a tabela dentro da div
}
