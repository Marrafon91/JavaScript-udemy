// Seleciona o elemento que contém os parágrafos, identificado pela classe 'paragrafos'
const paragrafos = document.querySelector(".paragrafos");

// Seleciona todos os elementos <p> dentro do elemento 'paragrafos'
const ps = paragrafos.querySelectorAll("p");

// Seleciona todos os elementos com a classe 'titulo' (retorna uma NodeList)
const titulos = document.querySelectorAll(".titulo");

// Obtém os estilos computados do body para acessar a cor de fundo atual
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor; // Armazena a cor de fundo do body

// Percorre todos os parágrafos selecionados e aplica estilos
for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody; // Define a cor de fundo igual à do body
  p.style.color = "blue"; // Define a cor do texto como azul
  p.style.borderRadius = "5px"; // Aplica um arredondamento nas bordas dos parágrafos
  p.style.marginBottom = "10px"; // Adiciona espaçamento inferior entre os parágrafos
}

// Percorre todos os elementos com a classe 'titulo' e aplica estilos
for (let titulo of titulos) {
  titulo.style.backgroundColor = "blue"; // Define a cor de fundo como azul
  titulo.style.color = "white"; // Define a cor do texto como branco
  titulo.style.borderRadius = "5px"; // Aplica um arredondamento nas bordas dos títulos
  titulo.style.marginBottom = "10px"; // Adiciona espaçamento inferior entre os títulos
}
