import { RequestHandler } from "express";
import { servicesService } from "../services/services.services";
import { IService } from "../types/services.interface";

const createServices: RequestHandler = async (req, res) => {

    const { name, amount, category, description, type }: IService = req.body;
    category.toLowerCase();
    type.toLowerCase();
    try {
        const services = await servicesService.createService({ name, description, amount, category, type });
        res.status(201).json({
            success: true,
            services,
            message: "Service Created Successfully",
        });
    }
    catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }

}

const getServices: RequestHandler = async (req, res) => {
    const { type } = req.query;
    try {
        const services = await servicesService.getServices(type as string);
        res.setHeader('cache-control', 'public, max-age=60000');
        res.status(200).json({
            success: true,
            services,
            message: "Services fetched successfully",
        });
    }
    catch (error: any) {
        res.status(400).json(
            {
                success: false,
                message: error.message
            }
        );
    }
}
const updateService: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { name, amount, category, description, type }: IService = req.body;
    try {
        const services = await servicesService.updateService(id, { name, description, amount, category, type });
        res.status(200).json({
            success: true,
            services,
            message: "Service Updated Successfully",
        });
    }
    catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }

}
export const servicesController = { createServices, getServices, updateService }
