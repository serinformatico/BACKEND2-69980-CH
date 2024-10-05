import PetDAO from "../daos/pet.dao.js";
import { ERROR_NOT_FOUND_ID } from "../constants/messages.constant.js";

export default class PetService {
    #petDAO;

    constructor() {
        this.#petDAO = new PetDAO();
    }

    // Obtener todas las mascotas aplicando filtros
    async findAll(paramFilters) {
        const $and = [];

        if (paramFilters?.name) $and.push({ name: { $regex: paramFilters.name, $options: "i" } });
        const filters = $and.length > 0 ? { $and } : {};

        return await this.#petDAO.findAll(filters);
    }

    // Obtener una mascota por su ID
    async findOneById(id) {
        const pet = await this.#petDAO.findOneById(id);
        if (!pet) throw new Error(ERROR_NOT_FOUND_ID);

        return pet;
    }

    // Crear una nueva mascota
    async insertOne(data) {
        return await this.#petDAO.save(data);
    }

    // Actualizar una mascota existente
    async updateOneById(id, data) {
        const pet = await this.findOneById(id);
        const newValues = { ...pet, ...data };
        return await this.#petDAO.save(newValues);
    }

    // Eliminar una mascota por su ID
    async deleteOneById(id) {
        const pet = await this.findOneById(id);
        await this.#petDAO.deleteOneById(id);
        return pet;
    }
}