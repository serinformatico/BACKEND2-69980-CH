import BebidaDecorator from "../BebidaDecorator.js";

export default class CapuchinoDecorator extends BebidaDecorator {
    constructor(bebida) {
        super(bebida);
    }

    getDescription() {
        return 'Capuchino';
    }

    getCost() {
        return super.getCost() + 950;
    }
}