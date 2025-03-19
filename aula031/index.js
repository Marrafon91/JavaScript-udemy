const verdadeira = true;

let nome = 'Luis'; // criando
var nome1 = 'Marrafon'; // criando

// let tem escopo de bloco {... bloco}
// var só tem escopo de função

var nome1 = 'Guilherme'; // criando
var nome2 = 'Otavio'; // redeclarando

if(verdadeira){
    let nome = 'Guilherme' // criando
    var nome2 = 'Rogério'; // redeclarando
    console.log(nome, nome1);

    if(verdadeira){
        var nome1 = 'Ronaldo' // redeclarando
        let nome = 'Alex'; // criando

        console.log(nome, nome1);
        console.log('OK');
    }
} 
 var sobrenome = "Marrafon";

    function falaOi(){
        console.log(sobrenome)
        
    }

    falaOi(); 
    console.log(sobrenome);
    