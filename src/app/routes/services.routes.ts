import { Router } from "express";
import { servicesController } from "../controllers/services.controller";

const serviceRoutes = Router()

serviceRoutes.post("/create-service", servicesController.createServices)
serviceRoutes.get("/services", servicesController.getServices)
serviceRoutes.patch("/update/:id", servicesController.updateService)



export default serviceRoutes
