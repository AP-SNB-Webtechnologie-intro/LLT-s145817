let map = L.map('nasaMap').setView([38.883, 77.0163], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Adres is van Microsoft in Brussel, wat ik nu mijn bedrijf heb gedoopt
// Cordinaten gevonden op https://www.openstreetmap.org/
let nasaMarker = L.marker([38.883, 77.0163]).addTo(map);
nasaMarker.bindPopup("NASA Hoofdkantoor").openPopup();