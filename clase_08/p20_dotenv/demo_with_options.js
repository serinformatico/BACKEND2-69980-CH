import { Command } from "commander";
import dotenv from "dotenv";

const program = new Command();
program
    .option('-e, --env <string>', 'Especificar el entorno', "DEV")
    .parse(process.argv);

const options = program.opts();

dotenv.config({
    path: (options.env === "PROD" ? "./.env.prod" : "./.env.dev")
});

console.log("\nVariable de entorno PORT:", process.env.PORT);


// Ejemplo de como ejecutar el script con el siguiente comando:
// node demo_with_options.js -e PROD