// Accede al objeto del entorno actual
console.log("Variables de entorno:", process.env);

console.log("\nAccediendo a los datos de las variables de entorno:");
console.log("Nombre de usuario:", process.env.USERNAME);
console.log("Idioma preferido:", process.env.LANG);
console.log("Directorio home del usuario:", process.env.HOME);

console.log("\nAgregando una nueva variable en las variables de entorno:");
process.env.MI_VARIABLE = "Hola Mundo";
console.log("Mi variable:", process.env.MI_VARIABLE);