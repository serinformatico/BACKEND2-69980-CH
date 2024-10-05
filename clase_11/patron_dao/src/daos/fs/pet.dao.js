import FsDAO from "./fs.dao.js";

export default class PetDAO extends FsDAO {
    constructor() {
        super("pet.json");
    }
}