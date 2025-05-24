const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModifiedText = document.querySelector("#lastModified");
const lastModified = document.lastModified;
lastModifiedText.textContent = `Last Modified: ${lastModified}`;


document.addEventListener('DOMContentLoaded', function() {
    const temperature = 33;
    const windSpeed = 16;    
    
    const windChillElement = document.getElementById('wind-chill');
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);
    
});

function calculateWindChill(temp, wind) {
    if (temp > 10 || wind <= 4.8) return 'N/A';
    
    const windChill = 13.12 + (0.6215 * temp) - 
                     (11.37 * Math.pow(wind, 0.16)) + 
                     (0.3965 * temp * Math.pow(wind, 0.16));
    
    return Math.round(windChill) + '°C';
}