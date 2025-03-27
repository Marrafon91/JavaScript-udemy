// Seleciona os elementos do HTML
const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

// Função para criar um elemento <li> para armazenar a tarefa
function criaLi() {
  const li = document.createElement("li");
  return li;
}

// Adiciona um evento para capturar quando o usuário pressiona a tecla "Enter"
inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) { // Verifica se a tecla pressionada é "Enter"
    if (!inputTarefa.value) return; // Se o input estiver vazio, não faz nada
    criaTarefa(inputTarefa.value); // Chama a função para criar a tarefa
  }
});

// Função para limpar o campo de input após adicionar uma tarefa
function limpaInput() {
  inputTarefa.value = ""; // Limpa o texto do input
  inputTarefa.focus(); // Deixa o cursor ativo no input novamente
}

// Função para criar o botão "Apagar" e adicioná-lo ao <li>
function criaBotaoApagar(li) {
  li.innerText += " "; // Adiciona um espaço antes do botão
  const botaoApagar = document.createElement("button"); // Cria o botão
  botaoApagar.innerText = "Apagar"; // Define o texto do botão
  botaoApagar.setAttribute("class", "apagar"); // Adiciona a classe "apagar" ao botão
  botaoApagar.setAttribute("title", "Apagar essa tarefa"); // Adiciona um título (tooltip) ao botão
  li.appendChild(botaoApagar); // Adiciona o botão ao <li>
}

// Função principal que cria uma tarefa e a adiciona à lista
function criaTarefa(textoInput) {
  const li = criaLi(); // Cria um elemento <li>
  li.innerText = textoInput; // Define o texto do <li> com o valor digitado pelo usuário
  tarefas.appendChild(li); // Adiciona o <li> à lista de tarefas
  limpaInput(); // Limpa o campo de input após adicionar a tarefa
  criaBotaoApagar(li); // Adiciona o botão "Apagar" à tarefa
  salvarTarefas(); // Salva a lista de tarefas no localStorage
}

// Evento para adicionar uma nova tarefa ao clicar no botão
btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return; // Se o input estiver vazio, não faz nada
  criaTarefa(inputTarefa.value); // Chama a função para criar a tarefa
});

// Evento para detectar cliques em qualquer lugar do documento
document.addEventListener("click", function (e) {
  const el = e.target; // Captura o elemento clicado
  if (el.classList.contains("apagar")) { // Verifica se o elemento tem a classe "apagar"
    el.parentElement.remove(); // Remove o <li> correspondente ao botão clicado
    salvarTarefas(); // Atualiza a lista salva no localStorage
  }
});

// Função para salvar as tarefas no localStorage
function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li"); // Seleciona todas as tarefas
  const listaDeTarefas = []; // Cria um array vazio para armazenar as tarefas

  // Percorre todas as tarefas e extrai apenas o texto (removendo "Apagar")
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim(); // Remove "Apagar" e espaços extras
    listaDeTarefas.push(tarefaTexto); // Adiciona o texto da tarefa ao array
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas); // Converte o array para JSON
  localStorage.setItem("tarefas", tarefasJSON); // Salva o JSON no localStorage
}

// Função para recuperar as tarefas salvas no localStorage e exibi-las ao carregar a página
function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas"); // Obtém as tarefas salvas no localStorage
  if (!tarefas) return; // Se não houver tarefas, sai da função
  const listaDeTarefas = JSON.parse(tarefas); // Converte o JSON de volta para array

  for (let tarefa of listaDeTarefas) { // Percorre o array de tarefas salvas
    criaTarefa(tarefa); // Recria cada tarefa na lista
  }
}

// Chama a função para restaurar as tarefas salvas ao carregar a página
adicionaTarefasSalvas();
