function convertirDistancia() {

    var valorKilometros = document.getElementById("kilometros").value;
    var inputResultado = document.getElementById("resultado");

    if (valorKilometros === "" || isNaN(valorKilometros)) {
        alert("Por favor, ingrese un número válido en el campo de kilometros.");
        inputResultado.value = ""; 
        return; 
    }

 
    var kilometros = parseFloat(valorKilometros);


    var millas = kilometros * 0.621371;


    inputResultado.value = millas.toFixed(5) + " mi";
}