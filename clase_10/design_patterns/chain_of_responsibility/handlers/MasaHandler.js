import Handler from "../Handler.js";

export default class MasaHandler extends Handler {
    handle(request) {
        if (request.step === 'MASA') {
            console.log('Preparar la masa de la pizza.');
            request.step = 'SALSA'
        }

        return super.handle(request);
  }
}