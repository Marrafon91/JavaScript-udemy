let num1 = Number(prompt("Digite um número entre 0 e 10"));
let num2 = Number(prompt("Digite outro número entre 0 e 10"));

if (num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
    alert("Por favor, insira números entre 0 e 10.");
} else {
    let media = (num1 + num2) / 2;
    let resultado = media > 7; 
    alert("Média maior que 7? " + resultado);
}




