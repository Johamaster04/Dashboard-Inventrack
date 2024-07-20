import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controller.js";
import { validateRegister, validateLogin } from "../middlewares/validation.js";

const router = Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.post("/logout", logout);

export default router;
