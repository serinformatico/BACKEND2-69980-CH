import dotenv from "dotenv";

dotenv.config();

console.log("\nVariable de entorno SALUDO:", process.env.SALUDO);
console.log("\nVariable de entorno PAIS:", process.env.PAIS);

dotenv.config({
    path: (process.env.ENV === "PROD" ? "./.env.prod" : "./.env.dev")
});

console.log("\nVariable de entorno PORT:", process.env.PORT);
