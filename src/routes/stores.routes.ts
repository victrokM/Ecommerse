import { Router } from "express";

import {
  createStore,
  updateStore,
  deleteStore,
  getStores,
  getStore,
} from "../controllers/stores.controllers";
import validateBody from "../middleware/validatorBody";
import { StoresSchema } from "../validateSchema/storesSchema";

const router: Router = Router();

router.get("/stores", getStores );
router.get("/store/:id", getStore);
router.post("/store", validateBody(StoresSchema),  createStore);
router.put("/store/:id", updateStore);
router.delete("/store/:id", deleteStore);

export default router;
