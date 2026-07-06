
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    const input1 = document.getElementById('numero1').value.trim();
    const input2 = document.getElementById('numero2').value.trim();
    const campoResultado = document.getElementById('resultado');

    if (input1 === '' || input2 === '' || isNaN(input1) || isNaN(input2)) {
        Swal.fire({
            icon: 'error',
            title: 'Error de validación',
            text: 'Por favor, ingrese números válidos en ambos campos.',
            confirmButtonColor: '#007bff'
        });
        campoResultado.value = ''; 
        return;
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let res;

    
    switch (operacion) {
        case 'suma':
            res = sumar(num1, num2);
            break;
        case 'resta':
            res = restar(num1, num2);
            break;
        case 'multiplicacion':
            res = multiplicar(num1, num2);
            break;
        case 'division':
            res = dividir(num1, num2);
            if (typeof res === 'string') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Operación inválida',
                    text: res,
                    confirmButtonColor: '#007bff'
                });
                campoResultado.value = '';
                return;
            }
            break;
        default:
            res = 'Operación no soportada';
    }

    campoResultado.value = res;
};