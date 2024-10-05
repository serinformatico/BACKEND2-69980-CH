import PetRepository from "../repositories/pet.repository.js";

export default class PetService {
    #petRepository;

    constructor() {
        this.#petRepository = new PetRepository();
    }

    // Obtener todas las mascotas aplicando filtros
    async findAll(paramFilters) {
        const $and = [];

        if (paramFilters?.name) $and.push({ name: { $regex: paramFilters.name, $options: "i" } });
        const filters = $and.length > 0 ? { $and } : {};

        return await this.#petRepository.findAll(filters);
    }

    // Obtener una mascota por su ID
    async findOneById(id) {
        return await this.#petRepository.findOneById(id);
    }

    // Crear una nueva mascota
    async insertOne(data) {
        return await this.#petRepository.save(data);
    }

    // Actualizar una mascota existente
    async updateOneById(id, data) {
        const pet = await this.findOneById(id);
        const newValues = { ...pet, ...data };
        return await this.#petRepository.save(newValues);
    }

    // Eliminar una mascota por su ID
    async deleteOneById(id) {
        return await this.#petRepository.deleteOneById(id);
    }
}