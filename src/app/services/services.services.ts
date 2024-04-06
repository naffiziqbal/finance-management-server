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


const updateService = async (id: string, { name, amount, category, description, type }: IService) => {
    const services = await Service.findByIdAndUpdate(id, { name, amount, category, description, type }, { new: true });
    if (!services) {
        throw new Error("Service not updated");
    }
    return services;

}

const deleteService = async (id: string) => {
    const services = await Service.findByIdAndDelete(id);
    if (!services) {
        throw new Error("Service not deleted");
    }
    return services;
}

const getTotalIncome = async (time: any) => {
    const services = await Service.aggregate([
        {
            $match: {
                type: "income",
                createdAt: {
                    $gte: new Date(new Date().setDate(new Date().getDate() - parseInt(time)))
                }
            }
        },
        {
            $group: {
                _id: null,
                totalIncome: { $sum: "$amount" }
            }
        }
    ]);

    if (!services.length) {
        throw new Error("No services found");
    }

    return services;
}

const getTotalExpenses = async (time: string) => {
    const services = await Service.aggregate([
        {
            $match: {
                type: "expenses",
                createdAt: {
                    $gte: new Date(new Date().setDate(new Date().getDate() - parseInt(time)))
                }
            }
        },
        {
            $group: {
                _id: null,
                totalExpenses: { $sum: "$amount" }
            }
        }
    ]);

    if (!services.length) {
        throw new Error("No services found");
    }

    return services;
}


export const servicesService = { createService, getServices, updateService, deleteService, getTotalIncome, getTotalExpenses}
