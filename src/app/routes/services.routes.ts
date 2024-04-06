import { Router } from "express";
import { servicesController } from "../controllers/services.controller";

const serviceRoutes = Router()

serviceRoutes.post("/create-service", servicesController.createServices)
serviceRoutes.get("/expenses", servicesController.getServices)



export default serviceRoutes
