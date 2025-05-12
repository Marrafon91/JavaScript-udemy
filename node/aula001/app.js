const path = require('path')
const axios = require('axios')
const { Pessoa } = require('./modulo1')

const p1 = new Pessoa('Guilherme')
console.log(p1)
const mod1 = require('./moodulo1');
console.log(mod1.falaNome())

axios('https://www.otaviomiranda.com/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e => console.log(e))