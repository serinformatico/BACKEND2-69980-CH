import BebidaDecorator from "../BebidaDecorator.js";

export default class CafeConLecheDecorator extends BebidaDecorator {
    constructor(bebida) {
        super(bebida);
    }

    getDescription() {
        return 'Café con leche';
    }

    getCost() {
        return super.getCost() + 500;
    }
}