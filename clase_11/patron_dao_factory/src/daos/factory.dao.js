import { FILE_SYSTEM, MEMORY, MONGODB } from "../constants/dao.constant.js";
import PetFsDAO from "./fs/pet.fs.dao.js";
import PetMemoryDAO from "./memory/pet.memory.dao.js";
import PetMongoDAO from "./mongodb/pet.mongo.dao.js";

export default class FactoryDAO {
    createPet(className) {
        switch (className) {
        case FILE_SYSTEM:
            return new PetFsDAO();
        case MEMORY:
            return new PetMemoryDAO();
        case MONGODB:
            return new PetMongoDAO();
        }
    }
}