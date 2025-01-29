import { Router } from "express";

import {
  createStore,
  updateStore,
  deleteStore,
  getStores,
  getStore,
} from "../controllers/stores.controllers";

const router: Router = Router();

router.get("/products", getStores );
router.get("/products/:id", getStore);
router.post("/products", createStore);
router.put("/products/:id", updateStore);
router.delete("/products/:id", deleteStore);

export default router;
