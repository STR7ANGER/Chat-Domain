import { Router } from "express";
import { google, login, me, register } from "./auth.controller.js";
import { requireAuth } from "../../middleware/auth.js";

export const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/google", google);
authRouter.get("/me", requireAuth, me);
