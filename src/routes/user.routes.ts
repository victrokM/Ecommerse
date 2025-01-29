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

const router: Router = Router();

router.get("/users", getUsers );
router.get("/user/:id", getUser);
router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
