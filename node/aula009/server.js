const express = require('express');
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(routes)


app.listen(3333, () => {
    console.log('Acesse http://localhost:3333');
    console.log('Servidor executando na porta 3333');
});
