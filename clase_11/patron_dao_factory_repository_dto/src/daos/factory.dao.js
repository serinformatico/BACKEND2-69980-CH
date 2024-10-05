import FsDAO from "./fs/fs.dao.js";
import MemoryDAO from "./memory/memory.dao.js";
import MongoDAO from "./mongodb/mongo.dao.js";
import Pet from "./mongodb/models/pet.model.js";
import { FILE_SYSTEM, MEMORY, MONGODB } from "../constants/dao.constant.js";

export default class FactoryDAO {
    createPet(className) {
        switch (className) {
        case FILE_SYSTEM:
            return new FsDAO("pet.json");
        case MEMORY:
            return new MemoryDAO();
        case MONGODB:
            return new MongoDAO(Pet);
        }
    }
}