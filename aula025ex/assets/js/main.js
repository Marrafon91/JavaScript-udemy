function calcularIMC() {
  const peso = parseFloat(document.querySelector("#peso").value);
  const altura = parseFloat(document.querySelector("#altura").value);
  const resultado = document.querySelector("#resultado");

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultado.textContent = "Valores inválidos. Insira números positivos.";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade grau 1";
  } else if (imc < 40) {
    classificacao = "Obesidade grau 2";
  } else {
    classificacao = "Obesidade grau 3";
  }

  resultado.textContent = `Seu IMC é ${imc.toFixed(2)}% - ${classificacao}`;
}
