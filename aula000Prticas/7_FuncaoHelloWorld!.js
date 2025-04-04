function helloWorld () {
    return function (){
        return "Hello World!!!"
    }
}

console.log(helloWorld()())