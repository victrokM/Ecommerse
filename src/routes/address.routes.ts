import { Router } from "express";

import {
  createAddress,
  updateAddress,
  deleteAddress,
  getAddresses,
  getAddress,
} from "../controllers/address.controllers";

const router: Router = Router();

router.get("/products", getAddresses );
router.get("/products/:id", getAddress);
router.post("/products", createAddress);
router.put("/products/:id", updateAddress);
router.delete("/products/:id", deleteAddress);

export default router;
