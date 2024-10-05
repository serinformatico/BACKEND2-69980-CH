import BebidaDecorator from "../BebidaDecorator.js";

export default class CortadoDecorator extends BebidaDecorator {
    constructor(bebida) {
        super(bebida);
    }

    getDescription() {
        return 'Cortado';
    }

    getCost() {
        return super.getCost() + 750;
    }
}