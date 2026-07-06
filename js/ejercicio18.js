
const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');


function agregarElemento() {
    const texto = input.value.trim(); 

    if (texto !== '') {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'animate__animated', 'animate__fadeIn'); 
        
        const spanTexto = document.createElement('span');
        spanTexto.textContent = texto;
        li.appendChild(spanTexto);

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm'); 
        
        botonEliminar.addEventListener('click', function() {
            li.remove(); 
        });

   
        li.appendChild(botonEliminar); 
        lista.appendChild(li);         

        
        input.value = '';
        input.focus();
    } else {
        alert('Por favor, escribe algo válido para agregar a la lista.');
    }
}


botonAgregar.addEventListener('click', agregarElemento);


input.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        agregarElemento();
    }
});