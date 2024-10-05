import FactoryDAO from "../daos/factory.dao.js";
import PetDTO from "../dtos/pet.dto.js";
import { MONGODB } from "../constants/dao.constant.js";
import { ERROR_NOT_FOUND_ID } from "../constants/messages.constant.js";

export default class PetRepository {
    #petDAO;
    #petDTO;

    constructor() {
        const factory = new FactoryDAO(); // Uso del patrón "Factory Method"
        this.#petDAO = factory.createPet(MONGODB); // Puede emplear las constantes MEMORY o MONGODB
        this.#petDTO = new PetDTO();
    }

    // Obtener todas las mascotas aplicando filtros
    async findAll(filters) {
        const pets = await this.#petDAO.findAll(filters);
        const petsDTO = pets.map((pet) => this.#petDTO.fromModel(pet));

        return petsDTO;
    }

    // Obtener una mascota por su ID
    async findOneById(id) {
        const pet = await this.#petDAO.findOneById(id);
        if (!pet) throw new Error(ERROR_NOT_FOUND_ID);

        return this.#petDTO.fromModel(pet);
    }

    // Crea o actualiza una nueva mascota
    async save(data) {
        const petDTO = this.#petDTO.fromData(data);
        const pet = await this.#petDAO.save(petDTO);
        return this.#petDTO.fromModel(pet);
    }

    // Eliminar una mascota por su ID
    async deleteOneById(id) {
        const pet = await this.findOneById(id);
        await this.#petDAO.deleteOneById(id);
        return pet;
    }
}