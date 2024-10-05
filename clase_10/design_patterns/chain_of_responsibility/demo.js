import MasaHandler from "./handlers/MasaHandler.js";
import SalsaHandler from "./handlers/SalsaHandler.js";
import QuesoHandler from "./handlers/QuesoHandler.js";
import JamonHandler from "./handlers/JamonHandler.js";

const masaHandler = new MasaHandler();
const salsaHandler = new SalsaHandler();
const quesoHandler = new QuesoHandler();
const jamonHandler = new JamonHandler();

masaHandler.setNext(salsaHandler).setNext(quesoHandler).setNext(jamonHandler);


function preparePizza() {
    const request = { step: 'MASA' };
    masaHandler.handle(request);
}

preparePizza();