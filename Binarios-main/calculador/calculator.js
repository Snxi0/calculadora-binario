const display = document.getElementById("display");


function appendToDisplay(input) {
    display.value += input;
}


function clearDisplay() {
    display.value = "";
    document.getElementById("binaryResult").textContent = "0";
}


function calculate() {
    const input = display.value;


    if (input.includes('/0')) {
        display.value = "No se puede dividir entre 0";
        document.getElementById("binaryResult").textContent = "0";
        return;
    }

    try {
        // Evaluar la expresión y mostrar el resultado en decimal
        let result = eval(input);

        // Verificar si hay una operacion en el display
        if (isNaN(result)) {
            throw new Error("Resultado no válido");
        }

        // Mostrar el resultado
        display.value = result;

        // Convertir el resultado a binario manualmente (sin toString(2))
        convertToBinary(result);

    } catch (error) {
        // Manejo de errores en caso de una expresión incorrecta
        display.value = "Digita un número";
        document.getElementById("binaryResult").textContent = "0";
    }
}

// Función para convertir un número decimal a binario manualmente
function convertToBinary(decimal) {

    // Verificar si el resultado es un número válido
    if (isNaN(decimal)) {
        document.getElementById("binaryResult").textContent = "No es un número válido";
        return;
    }

    //Aquí binary es una cadena vacía ('') que se va a utilizar para almacenar el resultado de la conversión a binario.
    let binary = '';

    // Convertir manualmente a binario
    if (decimal === 0) {
        binary = '0';
    } else {
        while (decimal > 0) {
            binary = (decimal % 2) + binary;
            decimal = Math.floor(decimal / 2);
        }
    }

    // Mostrar el resultado en binario en el elemento correspondiente
    document.getElementById("binaryResult").textContent = binary;
}
