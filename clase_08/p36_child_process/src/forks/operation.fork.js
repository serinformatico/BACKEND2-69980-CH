import { calculateComplexOperation } from "../operations.js";

// Maneja los mensajes recibidos del proceso principal
process.on("message", (message) => {
    console.log(`Mensaje recibido: ${JSON.stringify(message)} - PID: ${process.pid}`);

    try {
        // Realiza la operación compleja
        const result = calculateComplexOperation();
        console.log("Resultado de la operación:", result);

        // Envía el resultado de la operación al proceso principal
        process.send({ result });
    } catch (error) {
        process.send({ error: `Error durante la ejecución de la operación. ${error.message}` });
    }
});