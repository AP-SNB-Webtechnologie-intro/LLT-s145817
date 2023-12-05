// URL van de NASA APOD API
let apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=dObVVK1dLsMAYkW4gk2HX2SlHvqnM4ylAWLWdflQ';

// Functie om de data van de NASA APOD API op te halen en weer te geven
function fetchNasaApod() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Netwerk respons was niet ok');
            }
            return response.json(); 
        })
        .then(data => {
            // Update de HTML-elementen met de titel en afbeelding
            document.getElementById('apodTitle').textContent = data.title;
            document.getElementById('apodImage').src = data.url;
            document.getElementById('apodImage').alt = data.title;
        })
        .catch(error => {
            console.error('Fout bij het ophalen van de NASA APOD data:', error);
        });
}

// Roep de functie aan bij het laden van de pagina
fetchNasaApod();
