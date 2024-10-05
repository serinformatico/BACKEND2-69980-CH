import MongoDAO from "./mongo.dao.js";
import Pet from "./models/pet.model.js";

export default class PetMongoDAO extends MongoDAO {
    constructor() {
        super(Pet);
    }
}