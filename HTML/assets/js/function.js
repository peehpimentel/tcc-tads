// Função para esconder o botão de "Aceitar e mostrar mapa.".
function hideBTN() {
    var z = document.getElementById("texto");
    var x = document.getElementById("texto2");
    if (z.style.display === "none") {
        z.style.display = "block";
        x.style.display = "block";
    } else {
        z.style.display = "none";
        x.style.display = "none";
    }
}