import { Command } from "commander";

const program = new Command();

// Definir las opciones y comandos
program
    .version('1.0.0') // Establecer la versión de la aplicación
    .description('Un ejemplo de uso de commander.js en Node.js') // Descripción del programa
    .option('-n, --name <type>', 'Especificar el nombre')
    .option('-a, --age <number>', 'Especificar la edad', parseInt)
    .requiredOption('-i, --is-argentino <boolean>', 'Especificar el país', (value) => value === 'true')
    .parse(process.argv); // Convertir los argumentos

// Acceder a las opciones ingresadas
const options = program.opts();
console.log("Opciones ingresadas", options);

// Ejemplo de como ejecutar el script con el siguiente comando:
// node demo.js -n Juan -a 18 -i true