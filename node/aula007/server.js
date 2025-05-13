// Importa o módulo Express
const express = require('express');

// Cria uma instância do Express
const app = express();

// ----------------------------------------
// CRUD -> CREATE, READ, UPDATE, DELETE
// Métodos HTTP correspondentes:
//        POST   GET   PUT     DELETE
// ----------------------------------------

// Rota principal - Método GET
// Quando o usuário acessar http://localhost:3333/ via navegador ou API client, essa rota será chamada
app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            <label for="nome">Nome do cliente:</label>
            <input type="text" name="nome" id="nome">
            <button type="submit">Enviar</button>
        </form>
    `);
});


// Rota principal - Método POST
// Quando um formulário ou cliente enviar dados para http://localhost:3333/ via POST
app.post('/', (req, res) => {
    res.send('Recebi o formulário'); // Confirma o recebimento dos dados
});

// Rota de contato - Método GET
// Acessando http://localhost:3333/contato no navegador, esta rota será acionada
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.'); // Mensagem de resposta
});

// Inicializa o servidor na porta 3333
app.listen(3333, () => {
    console.log('Acesse http://localhost:3333');
    console.log('Servidor executando na porta 3333');
});
