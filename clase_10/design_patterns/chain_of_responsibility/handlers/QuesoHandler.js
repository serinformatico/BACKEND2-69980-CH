import Handler from "../Handler.js";

export default class QuesoHandler extends Handler {
    handle(request) {
        if (request.step === 'QUESO') {
            console.log('Agregar el queso.');
            request.step = 'JAMON'
        }

        return super.handle(request);
    }
}