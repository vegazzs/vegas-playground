//CONSTANTS
const celcius = document.getElementById('degs');
const fahr = document.getElementById('fahr');
const kelvin = document.getElementById('kel');
const clear = document.getElementById('clear');


//FUNCTONS
function fromCelcius() {
    let cel = parseFloat(celcius.value);
    fahr.value = (cel * 9 / 5) + 32;
    kelvin.value = cel + 273.15;
   
}

function fromFahrenheit() {
    let f = parseFloat(fahr.value)
    let cel = (f - 32) * 5 / 9;
    celcius.value = cel;
    kelvin.value = cel + 273.15; 
}

function fromKelvin() {
    let k = parseFloat(kelvin.value);
    let cel = k - 273.15;
    celcius.value = cel;
    fahr.value = (cel * 9 / 5) + 32;
}

function clearAll() {
    celcius.value = '';
    fahr.value= '';
    kelvin.value = '';
}

//EVENT LISTENERS
celcius.addEventListener('input', fromCelcius);
fahr.addEventListener('input', fromFahrenheit);
kelvin.addEventListener('input', fromKelvin);
