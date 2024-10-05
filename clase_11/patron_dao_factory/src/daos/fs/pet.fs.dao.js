import FsDAO from "./fs.dao.js";

export default class PetFsDAO extends FsDAO {
    constructor() {
        super("pet.json");
    }
}