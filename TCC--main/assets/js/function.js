function expandMap() {
    const mapElement = document.getElementById('map');

    // Ajusta o estilo do mapa para expandir
    if (!mapElement.classList.contains('expanded')) {
        mapElement.style.height = '100vh'; // Expande o mapa para a altura total da tela
        mapElement.classList.add('expanded'); // Adiciona classe de expansão
    } 
}
function resizeMap() {
    setTimeout(function () {
        map.invalidateSize();
    }, 300); // Timeout para permitir que o modal termine de abrir
}

// Quando o usuário clicar em "Notícias", o modal é exibido
newsLink.onclick = function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    modal.style.display = "block";
    mainContent.classList.add("blur-background"); // Adiciona o desfoque
    headerContent.classList.add("blur-background"); // Adiciona o desfoque no header

    resizeMap(); // Redimensiona o mapa
}

// Quando o usuário clicar em <span> (x), o modal é fechado
span.onclick = function() {
    modal.style.display = "none";
    mainContent.classList.remove("blur-background"); // Remove o desfoque
    headerContent.classList.remove("blur-background"); // Remove o desfoque no header

    resizeMap(); // Redimensiona o mapa
}

// Quando o usuário clicar fora do modal, ele é fechado
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        mainContent.classList.remove("blur-background"); // Remove o desfoque
        headerContent.classList.remove("blur-background"); // Remove o desfoque no header

        resizeMap(); // Redimensiona o mapa
    }
}
