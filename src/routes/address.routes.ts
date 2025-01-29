import { Router } from "express";

import {
  createAddress,
  updateAddress,
  deleteAddress,
  getAddresses,
  getAddress,
} from "../controllers/address.controllers";

const router: Router = Router();

router.get("/addresses", getAddresses );
router.get("/address/:id", getAddress);
router.post("/address", createAddress);
router.put("/address/:id", updateAddress);
router.delete("/address/:id", deleteAddress);

export default router;
