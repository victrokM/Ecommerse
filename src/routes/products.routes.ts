import { Router } from "express";

import {
  // getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProduct,
  // getProduct,
} from "../controllers/products.controllers";
import validateBody from "../middleware/validatorBody";
import { ProductSchema } from "../validateSchema/productSchema";

const router: Router = Router();

router.get("/products", getProducts );
router.get("/products/:id", getProduct);
router.post("/products", validateBody(ProductSchema),  createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
