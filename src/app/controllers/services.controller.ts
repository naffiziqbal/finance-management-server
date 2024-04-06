import { RequestHandler } from "express";
import { servicesService } from "../services/services.services";
import { IService } from "../types/services.interface";

const createServices: RequestHandler = async (req, res) => {

    const { name, amount, category, description, type }: IService = req.body;
    try {
        const services = await servicesService.createService({ name, description, amount, category, type });
        res.status(201).json({
            success: true,
            services,
            message: "Service Created Successfully",
        });
    }
    catch (error: any) {
        res.status(400).send(error.message);
    }

}

export const servicesController = { createServices }
