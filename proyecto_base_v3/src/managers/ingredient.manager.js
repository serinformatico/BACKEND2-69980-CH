import mongoose from "mongoose";
import paths from "../utils/paths.js";
import Ingredient from "../models/ingredient.model.js";
import { isValidID } from "../config/mongoose.config.js";
import { deleteFile } from "../utils/fileSystem.js";
import { convertToBoolean } from "../utils/converter.js";

import {
    ERROR_INVALID_ID,
    ERROR_NOT_FOUND_ID,
} from "../constants/messages.constant.js";

export default class IngredientManager {
    #ingredient;

    constructor() {
        this.#ingredient = Ingredient;
    }

    // Maneja errores específicos de Mongoose (errores de validación)
    #handleError = (error) => {
        if (error instanceof mongoose.Error.ValidationError) {
            throw new Error(Object.values(error.errors)[0].message);
        }

        throw new Error(error.message);
    };

    // Valida que el ID proporcionado sea un ID válido de MongoDB
    #validateId = (id) => {
        if (!isValidID(id)) throw new Error(ERROR_INVALID_ID);
    };

    // Busca un ingrediente por su ID
    #findOneById = async (id) => {
        this.#validateId(id);

        const ingredientFound = await this.#ingredient.findOne({ _id: id });
        if (!ingredientFound) throw new Error(ERROR_NOT_FOUND_ID);

        return ingredientFound;
    };

    // Obtiene todos los ingredientes que coinciden opcionalmente con los filtros recibidos
    getAll = async (paramFilters) => {
        try {
            const $and = [];

            if (paramFilters?.title) $and.push({ title: { $regex: paramFilters.title, $options: "i" } });
            const filters = $and.length > 0 ? { $and } : {};

            const sort = {
                asc: { title: 1 },
                desc: { title: -1 },
            };

            const paginationOptions = {
                limit: paramFilters?.limit ?? 10,
                page: paramFilters?.page ?? 1,
                sort: sort[paramFilters?.sort] ?? {},
                lean: true,
            };

            // Busca y pagina todos los ingredientes
            const ingredientsFound = await this.#ingredient.paginate(filters, paginationOptions);
            return ingredientsFound;
        } catch (error) {
            this.#handleError(error);
        }
    };

    // Obtiene un ingrediente por su ID
    getOneById = async (id) => {
        try {
            const ingredientFound = await this.#findOneById(id);
            return ingredientFound.toObject();
        } catch (error) {
            this.#handleError(error);
        }
    };

    // Inserta un nuevo ingrediente
    insertOne = async (data, filename) => {
        try {
            const ingredient = new Ingredient({
                ...data,
                status: convertToBoolean(data.status),
                thumbnail: filename ?? null,
            });

            await ingredient.save();
            return ingredient.toObject();
        } catch (error) {
            if (filename) await deleteFile(paths.images, filename);
            this.#handleError(error);
        }
    };

    // Actualiza un ingrediente por su ID
    updateOneById = async (id, data, filename) => {
        try {
            const ingredientFound = await this.#findOneById(id);
            const currentThumbnail = ingredientFound.thumbnail;
            const newThumbnail = filename;

            const newValues = {
                ...data,
                status: convertToBoolean(data.status),
                thumbnail: newThumbnail ?? currentThumbnail,
            };

            ingredientFound.set(newValues);
            await ingredientFound.save();

            if (filename && newThumbnail !== currentThumbnail) {
                await deleteFile(paths.images, currentThumbnail);
            }

            return ingredientFound.toObject();
        } catch (error) {
            if (filename) await deleteFile(paths.images, filename);
            this.#handleError(error);
        }
    };

    // Elimina un ingrediente por su ID
    deleteOneById = async (id) => {
        try {
            const ingredientFound = await this.#findOneById(id);

            if (ingredientFound.thumbnail) {
                await deleteFile(paths.images, ingredientFound.thumbnail);
            }

            await this.#ingredient.deleteOne({ _id: ingredientFound._id });
            return ingredientFound.toObject();
        } catch (error) {
            this.#handleError(error);
        }
    };
}