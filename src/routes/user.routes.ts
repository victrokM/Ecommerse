import { Router } from "express";

import {
  // getProducts,
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUser,
  // getProduct,
} from "../controllers/user.controllers";
import validateBody from "../middleware/validatorBody";
import { userSchema } from "../validateSchema/userSchema";

const router: Router = Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.post("/user", validateBody(userSchema), createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
