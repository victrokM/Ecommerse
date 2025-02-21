import { Router } from "express";

import {
  // getProducts,
  createShoppingCart,
  updateShoppingCart,
  deleteShoppingCart,
  getShoppingCarts,
  getShoppingCart,
  // getProduct,
} from "../controllers/shoppingCart.controllers";
import validateBody from "../middleware/validatorBody";
import { shoppingCartSchema } from "../validateSchema/shoppingCartSchema";

const router: Router = Router();

router.get("/shoppingCarts", getShoppingCarts );
router.get("/shoppingCart/:id",  getShoppingCart);
router.post("/shoppingCart",validateBody(shoppingCartSchema),  createShoppingCart);
router.put("/shoppingCart/:id", updateShoppingCart);
router.delete("/shoppingCart/:id", deleteShoppingCart);

export default router;
