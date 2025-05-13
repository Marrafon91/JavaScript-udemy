// Importa o módulo Express (framework que facilita a criação de servidores com Node.js)
const express = require('express');

// Cria uma instância do Express para configurar rotas, middlewares etc.
const app = express();

// Middleware que permite ler dados de formulários enviados por POST (formato x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Rota GET para a raiz "/" - exibe um formulário HTML simples
app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            <label for="nome">Nome do cliente:</label>
            <input type="text" name="nome" id="nome">
            <button type="submit">Enviar</button>
        </form>
    `);
});

// Rota GET com parâmetros dinâmicos na URL: /testes/:idUsuarios/:parametro
app.get('/testes/:idUsuarios/:parametro', (req, res) => {
    console.log('Parâmetros da rota:', req.params); // Exibe os parâmetros da rota (ex: /testes/1/abc)
    console.log('Query params:', req.query); // Exibe os parâmetros de query (ex: ?chave=valor)
    res.send(req.params); // Retorna os parâmetros como resposta
});

// Rota POST para "/" - trata os dados enviados pelo formulário HTML
app.post('/', (req, res) => {
    console.log('Dados recebidos via POST:', req.body); // Mostra os dados do formulário no console
    res.send(`O que você me enviou foi: ${req.body.nome}`); // Envia resposta com o nome digitado
});

// Inicializa o servidor na porta 3333
app.listen(3333, () => {
    console.log('Acesse http://localhost:3333');
    console.log('Servidor executando na porta 3333');
});




// 🧠 EXPLICAÇÃO DOS CONCEITOS:
// Conceito	Explicação
// express()	Cria a aplicação Express.
// app.use(express.urlencoded())	Middleware para ler os dados enviados em formulários HTML.
// app.get()	Define uma rota que responde a requisições HTTP do tipo GET.
// app.post()	Define uma rota que responde a requisições HTTP do tipo POST.
// req.params	Parâmetros da rota (parte da URL, ex: /usuario/1).
// req.query	Parâmetros de consulta (após ?, ex: /buscar?nome=João).
// req.body	Dados enviados no corpo da requisição (POST, PUT).
// res.send()	Envia uma resposta ao cliente.

