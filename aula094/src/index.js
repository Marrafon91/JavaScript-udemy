// import * as MeuModulo from './modulo1';
import Pessoa, {nome, sobrenome, idade, soma, multiplica} from './modulo1'

const p1 = new Pessoa(nome, sobrenome, idade)

console.log(p1)
console.log(idade)
console.log(multiplica(15, 5))
console.log(soma(15, 5))
