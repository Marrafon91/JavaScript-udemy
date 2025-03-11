const numero = Number (prompt('Digite um número:'))
const txt1 = document.getElementById('txt1')
const resultado = document.getElementById('resultado')

txt1.innerHTML = numero
resultado.innerHTML = ''
resultado.innerHTML += ` <p> Raiz quadrada: ${Math.sqrt(numero)}</p>`
resultado.innerHTML += ` <p> ${numero} É inteiro: ${Number.isInteger(numero)}</p>`
resultado.innerHTML += ` <p> É NaN: ${Number.isNaN(numero)}</p>`
resultado.innerHTML += ` <p> Arredondando para baixo: ${Math.floor(numero)}</p>`
resultado.innerHTML += ` <p> Arredondando para cima: ${Math.ceil(numero)}</p>`
resultado.innerHTML += ` <p> Com duas casas decimais ${numero.toFixed(2)}</p>`
