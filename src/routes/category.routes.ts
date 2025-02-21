import { Router } from "express";

import {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategories,
  getCategory,
} from "../controllers/categories.controllers";
import validateBody from "../middleware/validatorBody";
import { userSchema } from "../validateSchema/userSchema";
import { CategorySchema } from "../validateSchema/categorySchema";

const router: Router = Router();

router.get("/categories", getCategories );
router.get("/category/:id", getCategory);
router.post("/category", validateBody(CategorySchema),  createCategory);
router.put("/categories/:id", updateCategory);
router.delete("/category/:id", deleteCategory);

export default router;
