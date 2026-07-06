function calcular() {
    var inputResultado1 = document.getElementById("resultado1");
    var inputResultado2 = document.getElementById("resultado2");
    var inputResultado3 = document.getElementById("resultado3");
 
    let cadena = document.getElementById('numeros').value;

    if (cadena.trim() === "") {
        document.getElementById('resultado').innerHTML = "<p style='color: red;'>Por favor, ingresa al menos un número.</p>";
        return; 
    }

    let arregloTexto = cadena.split(",");
    let numeros = arregloTexto.map(Number);

   
    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);
    let suma = numeros.reduce((acc, valor) => acc + valor, 0);
    let promedio = suma / numeros.length;

    
    inputResultado1.value = maximo;  
    inputResultado2.value = minimo;
    inputResultado3.value = promedio;
}