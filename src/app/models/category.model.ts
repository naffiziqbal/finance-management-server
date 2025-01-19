import { model, Schema } from "mongoose";
import { ICategory } from "../types/category.interface";

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Category = model<ICategory>("Category", categorySchema);
