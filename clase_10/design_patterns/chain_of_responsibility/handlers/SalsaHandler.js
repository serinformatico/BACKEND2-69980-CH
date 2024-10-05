import Handler from "../Handler.js";

export default class SalsaHandler extends Handler {
    handle(request) {
        if (request.step === 'SALSA') {
            console.log('Añadir el salsa.');
            request.step = 'QUESO'
        }

        return super.handle(request);
    }
}