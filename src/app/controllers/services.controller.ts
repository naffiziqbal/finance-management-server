import { RequestHandler } from "express";
import { servicesService } from "../services/services.services";
import { IService } from "../types/services.interface";
import { Service } from "../models/services.model";

const createServices: RequestHandler = async (req, res) => {

    const { name, amount, category, description, type, creatorId }: IService = req.body;
    category.toLowerCase();
    type.toLowerCase();
    try {
        const services = await servicesService.createService({ name, creatorId, description, amount, category, type });
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
    const { id } = req.params;
    try {
        const services = await servicesService.getServices(type as string, id as string);
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

const deleteService: RequestHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const services = await servicesService.deleteService(id);
        res.status(200).json({
            success: true,
            services,
            message: "Service Deleted Successfully",
        });
    }
    catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const getTotalIncome: RequestHandler = async (req, res) => {
    const { time } = req.query;
    const { id } = req.params;
    try {
        const services = await servicesService.getTotalIncome(time as string, id as string);
        res.status(200).json({
            success: true,
            services,
            message: "Total Income fetched successfully",
        });
    }
    catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const getTotalExpenses: RequestHandler = async (req, res) => {
    const { time } = req.query;
    const { id } = req.params;
    try {
        const services = await servicesService.getTotalExpenses(time as string, id as string);
        res.status(200).json({
            success: true,
            services,
            message: "Total Expenses fetched successfully",
        });
    }
    catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}



const getCategoryWiseAmount = async (req: any, res: any) => {
    const { type, time } = req.query;
    const { id } = req.params;
    try {
        const services = await servicesService.getCategoryWiseAmount(type as string, id as string, time);
        res.status(200).json({
            success: true,
            services,
            message: "Category wise amount fetched successfully",
        });
    }
    catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const getCategoryData = async (req: any, res: any) => {
    const { type, category } = req.query;
    const { id } = req.params;
    try {
        const services = await servicesService.getCategoryData(type as string, category as string, id as string);
        res.status(200).json({
            success: true,
            services,
            message: "Category data fetched successfully",
        });
    }
    catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}



//! DANGEROUS AREA ===================================
const dropDatabase: RequestHandler = async (req, res) => {
    try {
        const service = await Service.deleteMany({});
        res.status(200).json({
            success: true,
            service,
            message: "Database Dropped Successfully",
        });
    }
    catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}
export const servicesController = { createServices, getServices, updateService, deleteService, getTotalIncome, getTotalExpenses, dropDatabase, getCategoryWiseAmount, getCategoryData }
