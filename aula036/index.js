function parImpar() {
  const numero = parseInt(prompt("Digite um número: "), 10);
  if (isNaN(numero)) {
    alert("Digite um número válido!");
  } else {
    if (numero % 2 === 0) {
      console.log(`O número ${numero} é par!`);
    } else {
      console.log(`O número ${numero} é ímpar!`);
    }
  }
}
parImpar();
