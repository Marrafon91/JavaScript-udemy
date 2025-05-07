// Função que retorna uma Promise para fazer requisições AJAX com XMLHttpRequest
const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); // Cria um novo objeto XMLHttpRequest
    xhr.open(obj.method, obj.url, true); // Abre a requisição com método e URL (modo assíncrono = true)
    xhr.send(); // Envia a requisição

    // Evento que escuta quando a resposta da requisição for carregada
    xhr.addEventListener("load", () => {
      // Se o status HTTP for de sucesso (200 a 299)
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText); // Retorna o conteúdo da resposta (HTML, texto, etc.)
      } else {
        reject(xhr.statusText); // Rejeita a promessa com o erro (statusText nem sempre é claro)
      }
    });
  });
};

// Escuta todos os cliques no documento (event delegation)
document.addEventListener("click", (e) => {
  const el = e.target; // Elemento clicado
  const tag = el.tagName.toLowerCase(); // Nome da tag em minúsculo

  // Se o clique for em uma tag <a> (link)
  if (tag === "a") {
    e.preventDefault(); // Impede o comportamento padrão (não recarrega a página)
    carregaPagina(el); // Chama a função para carregar a página via AJAX
  }
});

// Função assíncrona que carrega o conteúdo da página clicada
async function carregaPagina(el) {
  const href = el.getAttribute("href"); // Pega o atributo href do link clicado

  // Objeto com a configuração da requisição
  const objConfig = {
    method: "GET", // Método HTTP GET
    url: href // URL do recurso (arquivo .html, por exemplo)
  };

  // Faz a requisição e aguarda o resultado
  try {
    const response = await request(objConfig); // Aguarda o texto HTML
    carregaResultado(response); // Chama função para exibir o resultado no HTML
  } catch (e) {
    console.log("Erro ao carregar página:", e); // Mostra erro no console se falhar
  }
}

// Função que insere o conteúdo da resposta na div com a classe .resultado
function carregaResultado(response) {
  const resultado = document.querySelector(".resultado"); // Seleciona a div onde será exibido o conteúdo
  resultado.innerHTML = response; // Insere o conteúdo HTML na página
}

// Exemplo usando fetch API (modo moderno de fazer requisições)
fetch('pagina1.html') // Faz uma requisição GET para o arquivo 'pagina1.html'
  .then(resposta => {
    // Verifica se o status da resposta é diferente de 200 (OK)
    if (resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
    return resposta.text(); // Converte a resposta para texto (HTML)
  })
  .then(html => console.log(html)) // Mostra o conteúdo no console
  .catch(e => console.log(e)); // Mostra o erro se algo der errado
