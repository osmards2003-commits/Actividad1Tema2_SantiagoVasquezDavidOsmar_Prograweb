function convertirTemperatura() {

    var valorCelsius = document.getElementById("celsius").value;
    var inputResultado = document.getElementById("resultado");

    if (valorCelsius === "" || isNaN(valorCelsius)) {
        alert("Por favor, ingrese un número válido en el campo de grados Celsius.");
        inputResultado.value = ""; 
        return; 
    }

 
    var celsius = parseFloat(valorCelsius);


    var fahrenheit = (celsius * 9 / 5) + 32;


    inputResultado.value = fahrenheit.toFixed(1) + "°F";
}