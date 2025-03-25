// Selecionando elementos do HTML
const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let segundos = 0; // Variável para contar os segundos
let timer; // Variável para armazenar o setInterval

// Função para converter segundos para formato HH:MM:SS
function getTimeFromSeconds(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

// Função que inicia o cronômetro
function mostraHora() {
  return setInterval(function () {
    segundos++; // Incrementa os segundos
    const horaAtual = getTimeFromSeconds(segundos); // Converte para formato HH:MM:SS
    relogio.innerHTML = horaAtual; // Atualiza o relógio no HTML
  }, 1000);
}

// Evento do botão "Iniciar"
iniciar.addEventListener("click", function () {
  clearInterval(timer); // Evita múltiplos intervalos
  timer = mostraHora(); // Inicia o cronômetro
  relogio.classList.remove("pausado"); // Remove a classe de pausa
});

// Evento do botão "Pausar"
pausar.addEventListener("click", function () {
  clearInterval(timer); // Para o cronômetro
  relogio.classList.add("pausado"); // Adiciona uma classe para possível estilização
  });

// Evento do botão "Zerar"
zerar.addEventListener("click", function () {
  clearInterval(timer); // Para o cronômetro
  segundos = 0; // Reseta os segundos
  relogio.innerHTML = "00:00:00"; // Atualiza o relógio para 00:00:00
  relogio.classList.remove("pausado"); // Remove a classe de pausa
});

// Removendo a linha "container.appendChild(relogio);", pois "container" não foi definido.
