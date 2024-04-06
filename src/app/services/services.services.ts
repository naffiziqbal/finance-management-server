import { Service } from "../models/services.model";
import { IService } from "../types/services.interface";

const createService = async ({ name, amount, category, description, type }: IService) => {
    const services = await Service.create({ name, amount, category, description, type });
    if (!services._id) {
        throw new Error("Service not created");
    }
    return services;

}

const getServices = async (type: any) => {
    const services = await Service.find({ type: type });
    if (!services.length) {
        throw new Error("No services found");
    }
    
    return services;
}



export const servicesService = { createService, getServices }
