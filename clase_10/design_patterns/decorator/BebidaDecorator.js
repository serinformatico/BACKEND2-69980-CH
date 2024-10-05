import Bebida from "./Bebida.js";

export default class BebidaDecorator extends Bebida {
    bebida;
    #cost;

    constructor(bebida) {
        super();
        this.bebida = bebida;
        this.#cost = 1000;
    }

    getDescription() {
        return 'Bebida: ';
    }

    getCost() {
        return this.#cost;
    }
}