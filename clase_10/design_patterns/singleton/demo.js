import Singleton from "./Singleton.js";

const singleton1 = Singleton.getInstance();
singleton1.getRandomNumber();

const singleton2 = Singleton.getInstance();
singleton2.getRandomNumber();

// El siguiente código daría error: Des-comentar para probar
// const singleton3 = new Singleton();
// singleton3.getRandomNumber();