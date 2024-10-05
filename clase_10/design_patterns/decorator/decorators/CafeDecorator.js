import BebidaDecorator from "../BebidaDecorator.js";

export default class CafeDecorator extends BebidaDecorator {
    constructor(bebida) {
        super(bebida);
    }

    getDescription() {
        return 'Café';
    }

    getCost() {
        return super.getCost() + 100;
    }
}