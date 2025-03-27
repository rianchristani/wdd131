const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear()

lastModified.innerHTML = document.lastModified

const calculateWindChill = (temperature, windChill) => 13.12 + (0.6215 * temperature) - (11.37 * windChill**0.16) + (0.3965 * temperature * windChill**0.16);

document.querySelector('#windChill').innerHTML = `${calculateWindChill(11, 3).toFixed()}ºC`