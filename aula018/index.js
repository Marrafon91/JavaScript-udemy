const pessoa1 = { // objeto {}
    nome: 'Guilherme', // string
    sobrenome: 'Marrafon', // sobrenome
    idade: 25, // anos

    fala () { // método
        console.log (`A minha idade atual é ${this.idade} `) // this referencia o objeto
    },

    incrementaIdade() { // incrementaIdade é uma função que incrementa a idade
        this.idade++; // this referencia o objeto
    }
};

pessoa1.fala(); // A minha idade atual é 25
pessoa1.incrementaIdade(); // incrementa a idade
pessoa1.fala(); // imprime a idade atualizada
pessoa1.incrementaIdade(); // incrementa a idade
pessoa1.fala(); // imprime a idade atualizada
pessoa1.incrementaIdade(); // incrementa a idade
pessoa1.fala(); // imprime a idade atual
pessoa1.incrementaIdade(); // incrementa a idade
pessoa1.fala(); // imprime a idade atualizada




/*function criaPessoa (nome, sobrenome, idade) {
    return {nome,sobrenome,idade}; //retorna um objeto
}

const pessoa1 = criaPessoa ('Luiz', 'Otavio', 30); //
const pessoa2 = criaPessoa ('Maria', 'Oliveira', 55);
const pessoa3 = criaPessoa ('Guilherme', 'Marrafon', 33);
const pessoa4 = criaPessoa ('Ramon', 'Dino', 30);
const pessoa5 = criaPessoa ('Marcos', 'Morales', 64);

console.log(pessoa1,pessoa2,pessoa3,pessoa4,pessoa5)*/ 


//const array = [1, 2, 3] // this is an array
//array.push(4) // this is a method of the array object
//array[0] = 'Guilherme' // this is an array property

