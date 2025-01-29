import { Router } from "express";

import {
  createStore,
  updateStore,
  deleteStore,
  getStores,
  getStore,
} from "../controllers/stores.controllers";

const router: Router = Router();

router.get("/stores", getStores );
router.get("/store/:id", getStore);
router.post("/store", createStore);
router.put("/store/:id", updateStore);
router.delete("/store/:id", deleteStore);

export default router;
