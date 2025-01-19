import { RequestHandler } from "express";
import { Category } from "../models/category.model";

const createCategory: RequestHandler = async (req, res) => {
  try {
    const category = Category.create({ ...req.body });

    res.status(201).send(category);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};

const getCategory: RequestHandler = async (req, res) => {
  try {
    const category = await Category.find();

    res.status(200).send(category);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};

const updateCategory: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).send(category);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};

const deleteCategory: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await Category.findByIdAndDelete(id);

    res.status(200).send({ message: "Category deleted successfully" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};

export const CategoryController = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
