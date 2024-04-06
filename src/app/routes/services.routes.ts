import { Router } from "express";
import { servicesController } from "../controllers/services.controller";

const serviceRoutes = Router()

serviceRoutes.post("/create-service", servicesController.createServices)



export default serviceRoutes
