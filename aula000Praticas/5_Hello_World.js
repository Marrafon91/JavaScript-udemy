//1. Faça uma função que retorna o valor "Hello World"

function helloWorld() {
    return function(){
        return "Hello World"
    }
    
}
console.log(helloWorld()())