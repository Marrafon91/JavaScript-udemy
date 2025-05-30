//Opção 1
/*  const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toString();

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda-feira";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "Terça-feira";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "Quarta-feira";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "Quinta-feira";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "Sexta-feira";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = "";
      return diaSemanaTexto;
  }
}

function getNomeMes(numeroMes) {
  let nomeMes;
  switch (numeroMes) {
    case 0:
      nomeMes = "Janeiro";
      return nomeMes;
    case 1:
      nomeMes = "Fevereiro";
      return nomeMes;
    case 2:
      nomeMes = "Março";
      return nomeMes;
    case 3:
      nomeMes = "Abril";
      return nomeMes;
    case 4:
      nomeMes = "Maio";
      return nomeMes;
    case 5:
      nomeMes = "Junho";
      return nomeMes;
    case 6:
      nomeMes = "Julho";
      return nomeMes;
    case 7:
      nomeMes = "Agosto";
      return nomeMes;
    case 8:
      nomeMes = "Setembro";
      return nomeMes;
    case 9:
      nomeMes = "Outubro";
      return nomeMes;
    case 10:
      nomeMes = "Novembro";
      return nomeMes;
    case 11:
      nomeMes = "Dezembro";
    default:
      nomeMes = "";
    return nomeMes;
  }
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

h1.innerHTML =
  getDiaSemanaTexto(data.getDay()) +
  ", " +
  zeroAEsquerda(data.getDate()) +
  " de " +
  getNomeMes(data.getMonth()) +
  " de " +
  data.getFullYear() +
  " - " +
  zeroAEsquerda(data.getHours()) +
  ":" +
  zeroAEsquerda(data.getMinutes()) +
  ":" +
  zeroAEsquerda(data.getSeconds());*/

//Opção 2

/* const h1 = document.querySelector(".container h1");
const data = new Date();
const opcoes = {
    dateStyle: 'full',  // full, long, medium, short 
    timeStyle: 'medium'
}

h1.innerHTML = data.toLocaleString('pt-BR', opcoes); */

//Opção 2 Abreviada

const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toLocaleString("pt-BR", {
  dateStyle: "full",
  timeStyle: "medium",
});
