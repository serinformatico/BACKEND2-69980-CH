import PetModel from "../models/pet.model.js";

export default class PetDAO {
    #petModel;

    constructor() {
        this.#petModel = PetModel;
    }
    // Obtener todas las mascotas con filtros opcionales
    async findAll(filters) {
        return await this.#petModel.find(filters);
    }

    // Buscar una mascota por su ID
    async findOneById(id) {
        return await this.#petModel.findOne({ _id: id });
    }

    // Guarda los datos de una mascota
    async save(data) {
        const pet = new PetModel(data);
        return await pet.save();
    }

    // Eliminar una mascota por su ID
    async deleteOneById(id) {
        return await this.#petModel.deleteOne({ _id: id });
    }
}