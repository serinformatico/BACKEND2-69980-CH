export default class Singleton {
    static #instance = null;
    #randomNumber;

    constructor() {
        if (Singleton.#instance) {
            throw new Error("No se puede crear más de una instancia de una clase Singleton.");
        }

        this.#randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
        Singleton.#instance = this;
    }


    static getInstance() {
        if (!Singleton.#instance) {
        Singleton.#instance = new Singleton();
        }

        return Singleton.#instance;
    }

    getRandomNumber() {
        console.log(this.#randomNumber);
    }
}