// routers/pet.router.js
import PetController from "../../controllers/user.controller.js";
import BaseRouter from "../base.router.js";

export default class PetRouter extends BaseRouter {
    constructor() {
        super();
        this.petController = new PetController();
    }

    // Define las rutas y las asocia con los métodos del controlador
    initialize() {
        const router = this.getRouter();

        router.get("/", (req, res) => this.petController.getAll(req, res)); // Obtener todas las mascotas
        router.get("/:id", (req, res) => this.petController.getById(req, res)); // Obtener mascota por ID
        router.post("/", (req, res) => this.petController.create(req, res)); // Crear nueva mascota
        router.put("/:id", (req, res) => this.petController.update(req, res)); // Actualizar mascota por ID
        router.delete("/:id", (req, res) => this.petController.delete(req, res)); // Eliminar mascota por ID

        // Middleware de manejo de errores
        // eslint-disable-next-line no-unused-vars
        router.use((error, req, res, next) => {
            res.sendError(error);
        });
    }
}