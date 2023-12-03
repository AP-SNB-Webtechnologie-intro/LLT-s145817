// Vervang 'DEMO_KEY' met je eigen API-sleutel
const apiKey = 'dObVVK1dLsMAYkW4gk2HX2SlHvqnM4ylAWLWdflQ';

// De URL voor de NASA API
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

// Functie om de afbeelding van de dag op te halen
function fetchNasaPictureOfTheDay() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayImage(data);
    })
    .catch(error => console.log('Fout bij het ophalen van de NASA-gegevens:', error));
}

// Functie om de afbeelding en beschrijving weer te geven
function displayImage(data) {
  const imageContainer = document.getElementById('nasaImageContainer');
  const imageElement = document.createElement('img');
  const descriptionElement = document.createElement('p');

  imageElement.src = data.url;
  imageElement.alt = data.title;
  descriptionElement.textContent = data.explanation;

  imageContainer.appendChild(imageElement);
  imageContainer.appendChild(descriptionElement);
}

// Roep de functie aan wanneer de pagina laadt
document.addEventListener('DOMContentLoaded', fetchNasaPictureOfTheDay);
