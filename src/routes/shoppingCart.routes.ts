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

const router: Router = Router();

router.get("/shoppingCarts", getShoppingCarts );
router.get("/shoppingCart/:id", getShoppingCart);
router.post("/shoppingCart", createShoppingCart);
router.put("/shoppingCart/:id", updateShoppingCart);
router.delete("/shoppingCart/:id", deleteShoppingCart);

export default router;
