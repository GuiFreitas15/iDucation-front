// Carrega a barra de navegação em todas as páginas
document.addEventListener("DOMContentLoaded", function () {
    const navContainer = document.createElement('div');
    navContainer.setAttribute('id', 'nav-container');
    

    // Fetch nav.html and include it
    fetch("../Barra/nav.html")
        .then(response => response.text())
        .then(html => {
            navContainer.innerHTML = html;
            document.body.prepend(navContainer);
        });
});