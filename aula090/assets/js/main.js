// Adiciona um ouvinte de eventos para cliques em qualquer lugar do documento
document.addEventListener("click", (e) => {
  const el = e.target; // Pega o elemento que foi clicado
  const tag = el.tagName.toLowerCase(); // Converte o nome da tag para minúsculo (por padrão vem em maiúsculo)

  // Verifica se o elemento clicado é um link <a>
  if (tag === "a") {
    e.preventDefault(); // Impede o comportamento padrão (navegação para outra página)
    carregaPagina(el); // Chama a função para carregar a nova página via AJAX
  }
});


// Função assíncrona que carrega a página a partir do href do link clicado
async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href"); // Pega o valor do atributo href do link

    // Faz uma requisição GET usando a API fetch
    const response = await fetch(href);

    // Se a resposta não for OK (por exemplo, 404 ou 500), lança um erro
    if (response.status !== 200) throw new Error('ERRO 404');

    // Lê o corpo da resposta como texto (HTML, por exemplo)
    const html = await response.text();

    // Envia o HTML obtido para a função que exibe no navegador
    carregaResultado(html);
  } catch (e) {
    // Se algo der errado, exibe o erro no console
    console.error(e);
  }
}


// Função que insere o conteúdo HTML no elemento com classe .resultado
function carregaResultado(response) {
  const resultado = document.querySelector(".resultado"); // Seleciona o elemento onde será exibido o conteúdo
  resultado.innerHTML = response; // Insere o HTML carregado dentro da div
}


