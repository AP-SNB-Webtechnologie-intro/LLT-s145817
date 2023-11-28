let map = L.map('contactMap').setView([50.84079, 4.37135], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Adres is van Microsoft in Brussel, wat ik nu mijn bedrijf heb gedoopt
// Cordinaten gevonden op https://www.openstreetmap.org/
let contactMarker = L.marker([50.84078, 4.37134]).addTo(map);
contactMarker.bindPopup("Webtechnologie nv").openPopup();