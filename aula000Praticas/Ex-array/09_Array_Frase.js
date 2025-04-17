// Crie um array a partir de uma frase;
// imprima cada palavra do array no console por meio de um for

const fraseLonga = "Rato roeu a roupa do rei de roma";
const frase = fraseLonga.split(" ");
for (let i = 0; i < frase.length; i++) {
  console.log(frase[i]);
}
