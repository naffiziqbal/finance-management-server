import { Router } from "express";

import { CategoryController } from "../controllers/category.controller";

const router = Router();

router
  .route("/")
  .post(CategoryController.createCategory)
  .get(CategoryController.getCategory);

router
  .route("/:id")
  .patch(CategoryController.updateCategory)
  .delete(CategoryController.deleteCategory);

export default router;
