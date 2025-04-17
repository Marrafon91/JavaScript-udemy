let num1 = Number(prompt("Digite um número entre 0 e 10"));
let num2 = Number(prompt("Digite outro número entre 0 e 10"));

if (
  isNaN(num1) ||
  isNaN(num2) ||
  num1 < 0 ||
  num1 > 10 ||
  num2 < 0 ||
  num2 > 10
) {
  alert("Por favor, insira números entre 0 e 10.");
} else {
  let media = (num1 + num2) / 2;
  alert(`Sua média é ${media}`);

  if (media > 7) {
    alert(`${media} é maior que 7. Parabéns!`);
  } else if (media === 7) {
    alert(`${media} é igual a 7. Aprovado!`);
  } else {
    alert(`${media} é menor que 7. Reprovado.`);
  }
}
