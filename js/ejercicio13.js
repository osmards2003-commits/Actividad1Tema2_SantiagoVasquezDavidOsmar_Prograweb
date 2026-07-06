function verificarEdad() {

    var valoredad = document.getElementById("edad").value;
    var inputResultado = document.getElementById("resultado");
 
    var edad = parseFloat(valoredad);

    if (edad <= 0 ) {
        alert("Por favor, ingrese un número positivo.");
        inputResultado.value = ""; 
        return; 
    }
    else if (edad < 18) {
        inputResultado.value = " No";

    }
    else if (edad >= 18) {
          inputResultado.value = " Si";
    }
}