// Seleciona os elementos da página
const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

// Função para criar um elemento <li>
function criaLi() {
  return document.createElement("li"); // Retorna um novo elemento <li>
}

// Evento para capturar a tecla "Enter" e adicionar uma nova tarefa
inputTarefa.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && inputTarefa.value.trim()) {
    adicionaTarefa(inputTarefa.value.trim()); // Adiciona a tarefa somente se o input não estiver vazio
  }
});

// Função para limpar o campo de input e manter o foco nele
function limpaInput() {
  inputTarefa.value = ""; // Limpa o input
  inputTarefa.focus(); // Mantém o cursor no campo de input
}

// Função para criar o botão "Apagar"
function criaBotaoApagar() {
  const botaoApagar = document.createElement("button"); // Cria um elemento <button>
  botaoApagar.textContent = "Apagar"; // Define o texto do botão
  botaoApagar.classList.add("apagar"); // Adiciona a classe "apagar"
  botaoApagar.setAttribute("title", "Apagar essa tarefa"); // Adiciona um título (tooltip)
  return botaoApagar; // Retorna o botão criado
}

// Função principal para adicionar uma tarefa na lista
function adicionaTarefa(textoTarefa) {
  const li = criaLi(); // Cria um novo elemento <li>
  li.textContent = textoTarefa; // Define o texto da tarefa

  li.appendChild(document.createTextNode(" ")); // Adiciona um espaço antes do botão "Apagar"
  li.appendChild(criaBotaoApagar()); // Adiciona o botão "Apagar" à tarefa

  tarefas.appendChild(li); // Adiciona a tarefa à lista
  salvaTarefas(); // Atualiza o localStorage
  limpaInput(); // Limpa o input após adicionar a tarefa
}

// Evento para capturar clique no botão de adicionar tarefa
btnTarefa.addEventListener("click", () => {
  if (inputTarefa.value.trim()) {
    adicionaTarefa(inputTarefa.value.trim()); // Adiciona a tarefa apenas se o input não estiver vazio
  }
});

// Delegação de eventos para capturar cliques nos botões "Apagar"
tarefas.addEventListener("click", (e) => {
  if (e.target.classList.contains("apagar")) { // Verifica se o botão clicado tem a classe "apagar"
    e.target.closest("li").remove(); // Remove o <li> correspondente ao botão clicado
    salvaTarefas(); // Atualiza o localStorage
  }
});

// Função para salvar as tarefas no localStorage
function salvaTarefas() {
  const listaDeTarefas = [...tarefas.querySelectorAll("li")].map((tarefa) =>
    tarefa.textContent.replace("Apagar", "").trim() // Remove o texto "Apagar" e espaços extras
  );
  localStorage.setItem("tarefas", JSON.stringify(listaDeTarefas)); // Salva a lista no localStorage em formato JSON
}

// Função para carregar as tarefas salvas ao iniciar a página
function carregaTarefasSalvas() {
  const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || []; // Obtém as tarefas salvas no localStorage, ou um array vazio caso não haja tarefas
  const fragment = document.createDocumentFragment(); // Cria um fragmento de documento para melhorar a performance

  tarefasSalvas.forEach((tarefa) => {
    const li = criaLi(); // Cria um <li> para cada tarefa salva
    li.textContent = tarefa;

    li.appendChild(document.createTextNode(" ")); // Adiciona espaço antes do botão "Apagar"
    li.appendChild(criaBotaoApagar()); // Adiciona o botão "Apagar"

    fragment.appendChild(li); // Adiciona a tarefa ao fragmento
  });

  tarefas.appendChild(fragment); // Adiciona todas as tarefas de uma vez na DOM
}

// Carrega as tarefas salvas ao iniciar a página
carregaTarefasSalvas();
