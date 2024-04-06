import { Schema, model } from "mongoose";
import { IService } from "../types/services.interface";

const serviceSchema = new Schema<IService>({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    amount: { type: Number, required: true }
}, { timestamps: true });



export const Service = model<IService>("Service", serviceSchema);
