const nome = "Guilherme"
const sobrenome = "Marrafon"
const idade = 33

const falaNome = () => ` Eu sou! ${nome} ${sobrenome} e tenho ${idade} anos`

// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome

exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
this.qualquerCoisa = 'O que eu quiser exportar'

console.log(exports)


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;
