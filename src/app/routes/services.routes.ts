import { Router } from "express";
import { servicesController } from "../controllers/services.controller";
import { config } from "../../config";

const serviceRoutes = Router()

serviceRoutes.post("/create-service", servicesController.createServices) // Create a new service
serviceRoutes.get("/services/:id", servicesController.getServices) // Get Services by Types 
serviceRoutes.patch("/update/:id", servicesController.updateService)
serviceRoutes.delete("/delete/:id", servicesController.deleteService)
serviceRoutes.get("/total-income/:id", servicesController.getTotalIncome)
serviceRoutes.get("/total-expenses/:id", servicesController.getTotalExpenses)
serviceRoutes.get('/category-amount/:id', servicesController.getCategoryWiseAmount)
serviceRoutes.get('/category-data/:id', servicesController.getCategoryData)






// ! DANGEROUS AREA ===================================
if (config.environment === "development") {
    serviceRoutes.delete("/drop-database", servicesController.dropDatabase)
}

export default serviceRoutes
