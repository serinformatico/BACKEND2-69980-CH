import Handler from "../Handler.js";

export default class JamonHandler extends Handler {
    handle(request) {
        if (request.step === 'JAMON') {
            console.log('Colocar el jamón.');
            request.step = 'HECHO';
        }

        return super.handle(request);
    }
}