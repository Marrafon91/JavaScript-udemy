let h1 = document.querySelector('h1');

document.addEventListener('click', function() {
    h1.style.color = 'white';
    h1.style.border = '1px solid black';
    h1.style.width = '280px';
    h1.style.textAlign = 'center';
    h1.style.height = '50vh';
    h1.style.display = 'flex';
    h1.style.alignItems = 'center'; // Alinha verticalmente
    h1.style.justifyContent = 'center'; // Alinha horizontalmente
    h1.style.backgroundColor = 'black';
    
    // Centralizar o <h1> na tela inteira
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh'; // Faz o body ocupar a tela inteira
    document.body.style.margin = '0'; // Remove margens que possam atrapalhar
    document.body.style.backgroundColor = 'blue'
    
    // Alterar o texto do h1
    h1.textContent = 'Agora está no centro!';
}); 