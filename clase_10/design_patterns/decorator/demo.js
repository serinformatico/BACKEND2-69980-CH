import CafeDecorator from "./decorators/CafeDecorator.js";
import CafeConLecheDecorator from "./decorators/CafeConLecheDecorator.js";
import CortadoDecorator from "./decorators/CortadoDecorator.js";
import CapuchinoDecorator from "./decorators/CapuchinoDecorator.js";

const cafe = new CafeDecorator();
const cafeConLeche = new CafeConLecheDecorator();
const cortado = new CortadoDecorator();
const capuchino = new CapuchinoDecorator();

console.log("\nDescripción:", cafe.getDescription());
console.log("\tCosto:", cafe.getCost());

console.log("\nDescripción:", cafeConLeche.getDescription());
console.log("\tCosto:", cafeConLeche.getCost());

console.log("\nDescripción:", cortado.getDescription());
console.log("\tCosto:", cortado.getCost());

console.log("\nDescripción:", capuchino.getDescription());
console.log("\tCosto:", capuchino.getCost());