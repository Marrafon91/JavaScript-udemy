function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault(); // impede o comportamento padrão do form
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    const pessoa = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: Number(peso.value),
      altura: Number(altura.value),
    };

    function enviar() {
      resultado.innerHTML = "";
      resultado.innerHTML += `<p>${nome.value}</p>`;
      resultado.innerHTML += `<p>${sobrenome.value}</p>`;
      resultado.innerHTML += `<p>${peso.value}kg</p>`;
      resultado.innerHTML += `<p>${altura.value}m</p>`;
      form.reset();
    }

    pessoas.push(pessoa);

    enviar();
    {
      console.log(pessoas);
    }
  }
  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();
