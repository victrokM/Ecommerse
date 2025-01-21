import { Router } from "express";

import {
  // getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProduct,
  // getProduct,
} from "../controllers/projects.controllers";

const router: Router = Router();

router.get("/products", getProducts );
router.get("/products/:id", getProduct);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
