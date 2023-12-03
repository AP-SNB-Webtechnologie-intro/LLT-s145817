let map = L.map('contactMap').setView([38.8829, -77.01634], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Cordinaten gevonden op https://www.openstreetmap.org/
let nasaMarker = L.marker([38.8829, -77.01634]).addTo(map);
nasaMarker.bindPopup("NASA Hoofdkantoor").openPopup();