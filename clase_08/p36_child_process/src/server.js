/*
    IMPORTANTE:

    El modo --watch de Node.js presenta una incompatibilidad con el manejo de
    eventos de procesos, lo que puede resultar en el error ERR_HTTP_HEADERS_SENT.
    Este problema no se presenta cuando el servidor se ejecuta sin el modo --watch.
    Por esta razón, se recomienda utilizar Nodemon como alternativa para evitar
    este inconveniente.
*/

import express from "express";
import paths from "./utils/paths.js";
import { config as configDotenv } from "./config/dotenv.config.js";
import mongoDB from "./config/mongoose.config.js";

import apiUserRouter from "./routes/api.users.routes.js";
import demoRouter from "./routes/demo.routes.js";

const server = express();

// Configuración de dotenv
configDotenv();

// Decodificadores del BODY
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Enrutadores
server.use("/api/users", apiUserRouter);
server.use("/", demoRouter);

// Declaración de ruta estática: http://localhost:8080/api/public
server.use("/public", express.static(paths.public));

// Control de rutas inexistentes
server.use("*", (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

// Control de errores internos
server.use((error, req, res) => {
    console.log("Error:", error.message);
    res.status(500).send("<h1>Error 500</h1><h3>Se ha generado un error en el servidor</h3>");
});

// Método oyente de solicitudes
server.listen(process.env.PORT, async () => {
    console.log(`Ejecutándose en http://localhost:${process.env.PORT}`);
    await mongoDB.connectDB();
});