import { Router } from "express";

import {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategories,
  getCategory,
} from "../controllers/categories.controllers";

const router: Router = Router();

router.get("/products", getCategories );
router.get("/products/:id", getCategory);
router.post("/products", createCategory);
router.put("/products/:id", updateCategory);
router.delete("/products/:id", deleteCategory);

export default router;
