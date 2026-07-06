
function crearGestorTareas() {
    let _tareas = JSON.parse(localStorage.getItem("tareas_datos")) || [];

    function actualizarStorage() {
        localStorage.setItem("tareas_datos", JSON.stringify(_tareas));
    }

    return {
        agregar: function(texto) {
            const nueva = { id: Date.now(), texto: texto };
            _tareas.push(nueva);
            actualizarStorage();
        },
        eliminar: function(id) {
            _tareas = _tareas.filter(t => t.id !== id);
            actualizarStorage();
        },
        listar: function() {
            return [..._tareas];
        }
    };
}

const gestor = crearGestorTareas();

const btnAgregar = document.getElementById("btnAgregar");
const tareaInput = document.getElementById("tareaInput");
const listaTareas = document.getElementById("listaTareas");

function renderizar() {
    listaTareas.innerHTML = "";
    const tareas = gestor.listar();

    tareas.forEach(tarea => {
        const li = document.createElement("li");
        li.textContent = tarea.texto;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "btn-eliminar";
        
        btnEliminar.addEventListener("click", () => {
            Swal.fire({
                title: '¿Eliminar tarea?',
                text: `"${tarea.texto}"`,
                showCancelButton: true,
                confirmButtonColor: '#e74c3c',
                cancelButtonColor: '#7f8c8d',
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar',
                showClass: { popup: '' },
                hideClass: { popup: '' }
            }).then((result) => {
                if (result.isConfirmed) {
                    gestor.eliminar(tarea.id);
                    renderizar();
                }
            });
        });

        li.appendChild(btnEliminar);
        listaTareas.appendChild(li);
    });
}

btnAgregar.addEventListener("click", () => {
    const texto = tareaInput.value.trim();
    
    if (texto === "") {
        Swal.fire({
            title: 'Atención',
            text: 'El campo no puede estar vacío.',
            confirmButtonColor: '#2ecc71',
            showClass: { popup: '' },
            hideClass: { popup: '' }
        });
        return;
    }

    gestor.agregar(texto);
    tareaInput.value = "";
    renderizar();
});

tareaInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") btnAgregar.click();
});

document.addEventListener("DOMContentLoaded", renderizar);