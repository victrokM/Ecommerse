import { Router } from "express";

import {
  createAddress,
  updateAddress,
  deleteAddress,
  getAddresses,
  getAddress,
} from "../controllers/address.controllers";
import validateBody from "../middleware/validatorBody";
import { AddressSchema } from "../validateSchema/addressSchema";

const router: Router = Router();

router.get("/addresses", getAddresses );
router.get("/address/:id", getAddress);
router.post("/address", validateBody(AddressSchema),  createAddress);
router.put("/address/:id", updateAddress);
router.delete("/address/:id", deleteAddress);

export default router;
