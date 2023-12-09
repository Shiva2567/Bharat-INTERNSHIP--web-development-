# Bharat-INTERNSHIP--web-development-
Bharat INTERNSHIP -web development 

document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '5d5a7013f01ea307a36efff7a6876512';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    function getWeather() {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            fetch(`${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
                .then(response => response.json())
                .then(data => {
                    const location = data.name;
                    const temperature = data.main.temp;
                    const description = data.weather[0].description;

                    locationElement.textContent = `Location: ${location}`;
                    temperatureElement.textContent = `Temperature: ${temperature}°C`;
                    descriptionElement.textContent = `Description: ${description}`;
                })
                .catch(error => console.error('Error fetching weather data:', error));
        }, error => console.error('Error getting location:', error));
    }

    getWeather();
