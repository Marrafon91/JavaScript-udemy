exports.paginainicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            <label for="nome">Nome do cliente:</label>
            <input type="text" name="nome" id="nome">

            <label for="outro">Outro Campo:</label>
            <input type="text" name="outro" id="outro">

            <button type="submit">Enviar</button>
        </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.');
};
