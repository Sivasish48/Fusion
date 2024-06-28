import express from "express";
import { test, updateUser,userSelf } from "../controllers/userController.js";
import { authenticateUser } from "../utils/authenticateUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", authenticateUser, updateUser);
router.get("/userself", authenticateUser, userSelf);
export default router;
