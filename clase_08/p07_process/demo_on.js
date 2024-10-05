console.log("Configura un evento oyente para mensajes");
process.on("message", (msg) => {
    console.log("Mensaje recibido:", msg);
});

// Simula un mensaje para demostrar el uso
setTimeout(() => {
    process.emit("message", "Hola, este es un mensaje.");
}, 3000);

// Des-comentar para ver como funciona
// process.exit(0); // Sale del proceso con código 0 (éxito)

/*
    Explicación:
    - process.on("message", callback) se utiliza para escuchar el evento "message" y
      ejecutar un callback cuando se recibe un mensaje. Aquí simplemente muestra el
      mensaje recibido.
    - process.exit() se utiliza para salir del proceso de Node.js.
*/