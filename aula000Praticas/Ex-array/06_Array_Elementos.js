// Crie dois arrays, um com mais de 5 elementos e outro com menos;
// Faca uma funcao que verifica o numero de elementos;
// Se possuir menos que 5, imprima "Poucos elementos" no console;
// Se tiver mais, imprima "Muitos elementos"

const carros = ['BMW', 'VW', 'Hyundai','Mercedes','Audi', 'Honda']
const modelosCarros = ['HB20','Audi Q3', 'Onix']

/* carros.forEach(function(valor, indice) {
    console.log(valor, indice + 1)
    }); */
function verificarCarros(arr) {
 if(arr.length >= 5){
    console.log("Muitos elementos")
 } else {
    console.log("Poucos elementos")
 }
} 

verificarCarros(carros)
verificarCarros(modelosCarros)

