import { Router } from "express";

import {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategories,
  getCategory,
} from "../controllers/categories.controllers";

const router: Router = Router();

router.get("/categories", getCategories );
router.get("/category/:id", getCategory);
router.post("/category", createCategory);
router.put("/categories/:id", updateCategory);
router.delete("/category/:id", deleteCategory);

export default router;
