import { Router } from "express";
import { calculateComplexOperation } from "../operations.js";
import { fork } from "child_process";
import paths from "../utils/paths.js";

const router = Router();
let count = 0;

// Ruta para devolver un saludo con un contador incrementado
router.get("/saludo", (req, res) => {
    count++;
    res.status(200).send(`Hola Mundo ${count}`);
});

// Ruta para realizar un cálculo bloqueante y devolver el resultado
router.get("/calculo-bloqueante", (req, res) => {
    const result = calculateComplexOperation();
    res.status(200).send(`El resultado del cálculo bloqueante es ${result}`);
});

// Ruta para realizar un cálculo no bloqueante utilizando un proceso hijo
router.get("/calculo-no-bloqueante", (req, res) => {
    const childProcess = fork(`${paths.forks}/operation.fork.js`);

    // Enviar mensaje al proceso hijo para iniciar el cálculo
    childProcess.send("Iniciar cálculo");

    // Maneja la respuesta del proceso hijo
    childProcess.on("message", (data) => {
        if (data.error) {
            res.status(500).send(`Error al realizar el cálculo no bloqueante: ${data.error}`);
        } else {
            res.status(200).send(`El resultado del cálculo no bloqueante es: ${data.result}`);
        }
    });
});

export default router;