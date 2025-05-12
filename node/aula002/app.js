// Importa o módulo 'Cachorro' de um caminho relativo que vai até o arquivo 'modulo2.js'
const Cachorro = require('././A/B/C/D/modulo2');

// Cria uma instância da classe Cachorro com o nome 'Dog'
const Cachorrinho = new Cachorro('Dog');

// Chama o método 'latir' da instância criada
Cachorrinho.latir();


// Importa o módulo nativo 'path' do Node.js, usado para trabalhar com caminhos de arquivos
const path = require('path');

// Usa o método 'resolve' para montar um caminho absoluto
// '__dirname' representa o diretório atual do arquivo
// '..' vai subindo pastas (duas vezes, no caso)
// 'arquivos/imagens' são as pastas que você quer acessar a partir daí
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));

// Mostraria o caminho completo do arquivo atual (comentei conforme pedido)
// console.log(__filename);

// Mostraria o caminho completo da pasta onde está o arquivo atual
// console.log(__dirname);
