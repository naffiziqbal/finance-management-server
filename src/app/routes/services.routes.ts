import { Router } from "express";
import { servicesController } from "../controllers/services.controller";

const serviceRoutes = Router()

serviceRoutes.post("/create-service", servicesController.createServices)
serviceRoutes.get("/services", servicesController.getServices)
serviceRoutes.patch("/update/:id", servicesController.updateService)
serviceRoutes.delete("/delete/:id", servicesController.deleteService)
serviceRoutes.get("/total-income", servicesController.getTotalIncome)



export default serviceRoutes
