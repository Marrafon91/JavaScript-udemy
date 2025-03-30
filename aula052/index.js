// Escopo Léxico: Uma função "lembra" do local onde foi definida e busca variáveis nesse escopo se não as encontrar dentro dela.

const nome = "Guilherme"; // Variável declarada no escopo global

function falaNome() {
  console.log(nome); // A função busca a variável "nome" no escopo onde foi definida (escopo global)
}

// falaNome(); // Se chamada aqui, exibiria "Guilherme"

function usaFalaNome() {
  const nome = "Marrafon"; // Esta variável "nome" está dentro do escopo local da função usaFalaNome

  falaNome(); // Chama a função falaNome(), que está no escopo global
  // Como falaNome() foi definida no escopo global, ela NÃO usa o "nome" local da usaFalaNome()
  // Ela usa o "nome" que está no escopo onde foi criada, ou seja, "Guilherme"
}

usaFalaNome(); // Saída: "Guilherme"
