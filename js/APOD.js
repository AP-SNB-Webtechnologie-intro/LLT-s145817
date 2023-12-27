// URL van de NASA APOD API + API key ineens aan elkaar.
let apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=dObVVK1dLsMAYkW4gk2HX2SlHvqnM4ylAWLWdflQ';

fetch(apiUrl)
    .then(response => {
        return response.json();
    })
    .then(data => {
        // Update de HTML-elementen met de titel en afbeelding
        document.getElementById('apodTitle').textContent = data.title;
        document.getElementById('apodImage').src = data.url;
        document.getElementById('apodImage').alt = data.title;
        document.getElementById('apodText').textContent = data.explanation;

    })
