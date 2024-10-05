console.log("Argumentos de la línea de comandos:", process.argv);

// Separar los argumentos para mayor claridad
// El primer elemento (process.argv[0]) es la ruta absoluta al ejecutable de Node.js.
// El segundo elemento (process.argv[1]) es la ruta al archivo del script que estás ejecutando.
const args = process.argv.slice(2);

// Mostrar cada argumento por separado
args.forEach((arg, index) => {
    console.log(`Argumento ${index + 1}:`, arg);
});

// Ejemplo de como ejecutar el script con el siguiente comando:
// node demo_args.js 10 "Hola Mundo" true