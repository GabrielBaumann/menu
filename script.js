document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-menu');
    const body = document.body;
    
    menuButton.addEventListener('click', function() {
        body.classList.add('menu-open');
    });
    
    closeButton.addEventListener('click', function() {
        body.classList.remove('menu-open');
    });
    
    // Fechar o menu ao clicar fora
    document.addEventListener('click', function(event) {
        const isMenuOpen = body.classList.contains('menu-open');
        const isClickInsideMenu = event.target.closest('.menu');
        const isClickOnMenuButton = event.target.closest('#menu-button');
        
        if (isMenuOpen && !isClickInsideMenu && !isClickOnMenuButton) {
            body.classList.remove('menu-open');
        }
    });
});