let estudiantes = [];

function agregarEstudiante() {
    let inputNombre = document.getElementById("nombre");
    let inputCalificacion = document.getElementById("calificacion");
    let divError = document.getElementById("mensajeError");
    
    let nombre = inputNombre.value.trim();
    let calificacionTxt = inputCalificacion.value.trim();
    
    divError.innerHTML = ""; 

    if (nombre === "" || calificacionTxt === "") {
        divError.innerHTML = "Por favor, completa ambos campos.";
        return;
    }

    let calificacion = Number(calificacionTxt);

    if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        divError.innerHTML = "Ingresa una calificación válida entre 0 y 100.";
        return;
    }

    let nuevoEstudiante = {
        nombre: nombre,
        calificacion: calificacion
    };
    
    estudiantes.push(nuevoEstudiante);

    let lista = document.getElementById("listaEstudiantes");
    lista.innerHTML = ""; 
    for (let i = 0; i < estudiantes.length; i++) {
        lista.innerHTML += "<li>" + estudiantes[i].nombre + " - Nota: " + estudiantes[i].calificacion + "</li>";
    }

    inputNombre.value = "";
    inputCalificacion.value = "";
    inputNombre.focus();
}

function calcular() {
    let divError = document.getElementById("mensajeError");
    let outPromedio = document.getElementById("resultadoPromedio");
    let outMax = document.getElementById("resultadoMax");
    let outMin = document.getElementById("resultadoMin");

    divError.innerHTML = "";

    if (estudiantes.length === 0) {
        divError.innerHTML = "Debes agregar al menos un estudiante.";
        return;
    }

    let suma = 0;
    
    let estudianteMasAlto = estudiantes[0];
    let estudianteMasBajo = estudiantes[0];

    for (let i = 0; i < estudiantes.length; i++) {
        let est = estudiantes[i];
        
        suma += est.calificacion;

        if (est.calificacion > estudianteMasAlto.calificacion) {
            estudianteMasAlto = est;
        }

        if (est.calificacion < estudianteMasBajo.calificacion) {
            estudianteMasBajo = est;
        }
    }

    let promedio = suma / estudiantes.length;

    outPromedio.value = promedio.toFixed(2);
    outMax.value = estudianteMasAlto.nombre + " (" + estudianteMasAlto.calificacion + ")";
    outMin.value = estudianteMasBajo.nombre + " (" + estudianteMasBajo.calificacion + ")";
}