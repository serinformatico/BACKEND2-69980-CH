import { convertToBoolean } from "../utils/converter.js";

export default class IngredientDTO {
    fromModel(model) {
        return {
            id: model.id,
            title: model.title,
            description: model.description,
            stock: model.stock,
            status: model.status,
            thumbnail: model.thumbnail,
        };
    }

    fromData(data) {
        return {
            id: data.id || null,
            title: data.title,
            description: data.description,
            stock: Number(data.stock),
            status: convertToBoolean(data.status),
            thumbnail: data.thumbnail,
        };
    }
}