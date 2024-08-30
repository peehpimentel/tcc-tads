// Adicionar o map ao HTML.
var map = L.map('top').setView([-20.788195281530044, -51.70308998035825], 14.4);

var layer = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Função para adicionar marcadores com clique do mouse.
var markerOptions = {
    draggable: true,

}

map.on("click", function(e){                                                             
    let markerClick = new L.Marker([e.latlng.lat, e.latlng.lng],markerOptions)
    .addTo(map)
    .on('contextmenu', function(e) {  // Alterado para remover com o botão direito do mouse.
        e.target.remove();
    })
    .bindPopup('<h1>Título da notícia</h1><p>Sed et laoreet libero. In tempus ipsum vel consectetur dignissim. Fusce maximus ultrices dapibus. Vivamus nec lacus id nulla interdum vehicula.<p/><img src="./images/pic008.jpg" style="width: 200px">')
    
});
