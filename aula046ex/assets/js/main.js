function relogio() {
  const relogio = document.querySelector(".relogio");
  let segundos = 0;
  let timer;

  // Função que inicia o cronômetro
  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  // Função que converte os segundos em formato HH:MM:SS
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC", // Define o fuso horário UTC para evitar problemas com o horário local
    });
  }

  // Evento de clique que lida com os botões
  document.addEventListener("click", function (e) {
    const el = e.target; // Captura o elemento clicado

    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado"); // Remove a classe que indica pausa
      clearInterval(timer); // Evita múltiplos intervalos ao clicar repetidamente
      iniciaRelogio();
    }

    if (el.classList.contains("pausar")) {
      relogio.classList.add("pausado"); // Adiciona a classe para estilizar a pausa
      clearInterval(timer); // Para o cronômetro sem zerá-lo
    }

    if (el.classList.contains("zerar")) {
      relogio.classList.remove("pausado"); // Remove a classe de pausa
      clearInterval(timer); // Para o cronômetro
      segundos = 0; // Reseta a contagem
      relogio.innerHTML = "00:00:00"; // Atualiza a interface
    }
  });
}
relogio();
