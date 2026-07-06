function convertirPesos() {

    var valorpesos = document.getElementById("pesos").value;
    var inputResultado = document.getElementById("resultado");
 
    var pesos = parseFloat(valorpesos);

    if (pesos <= 0 ){
        alert("Por favor, ingrese un número positivo.");
        inputResultado.value = ""; 
        return; 
    }
    var dolares = pesos * 0.055;


    inputResultado.value = dolares.toFixed(2) + " USD";
}