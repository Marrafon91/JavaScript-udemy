const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos Proprios Middleware.
app.use(middlewareGlobal);
app.use(routes);


app.listen(3333, () => {
    console.log('Acesse http://localhost:3333');
    console.log('Servidor executando na porta 3333');
});
