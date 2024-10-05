import PetService from "../services/pet.service.js";

export default class PetController {
    #petService;

    constructor() {
        this.#petService = new PetService();
    }

    // Obtener todas las mascotas
    async getAll(req, res) {
        try {
            const pets = await this.#petService.findAll(req.query);
            res.sendSuccess200(pets);
        } catch (error) {
            res.sendError(error);
        }
    }

    // Obtener una mascota por su ID
    async getById(req, res) {
        try {
            const pet = await this.#petService.findOneById(req.params.id);
            res.sendSuccess200(pet);
        } catch (error) {
            res.sendError(error);
        }
    }

    // Crear una nueva mascota
    async create(req, res) {
        try {
            const pet = await this.#petService.insertOne(req.body);
            res.sendSuccess201(pet);
        } catch (error) {
            res.sendError(error);
        }
    }

    // Actualizar una mascota existente
    async update(req, res) {
        try {
            const pet = await this.#petService.updateOneById(req.params.id, req.body);
            res.sendSuccess200(pet);
        } catch (error) {
            res.sendError(error);
        }
    }

    // Eliminar una mascota por su ID
    async delete(req, res) {
        try {
            const pet = await this.#petService.deleteOneById(req.params.id);
            res.sendSuccess200(pet);
        } catch (error) {
            res.sendError(error);
        }
    }
}