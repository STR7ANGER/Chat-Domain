import { Request, Response } from "express";
import { registerSchema, loginSchema, googleSchema } from "./auth.schema.js";
import { loginWithEmail, loginWithGoogle, registerWithEmail } from "./auth.service.js";
import { getUserById } from "../user/user.service.js";
import { AuthRequest } from "../../middleware/auth.js";

export const register = async (req: Request, res: Response) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid input", errors: parsed.error.flatten().fieldErrors });
  }

  try {
    const { email, password, name, avatarUrl } = parsed.data;
    const result = await registerWithEmail(email, password, name, avatarUrl);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
};

export const login = async (req: Request, res: Response) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid input", errors: parsed.error.flatten().fieldErrors });
  }

  try {
    const { email, password } = parsed.data;
    const result = await loginWithEmail(email, password);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(401).json({ message: (error as Error).message });
  }
};

export const google = async (req: Request, res: Response) => {
  const parsed = googleSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid input", errors: parsed.error.flatten().fieldErrors });
  }

  try {
    const { idToken } = parsed.data;
    const result = await loginWithGoogle(idToken);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(401).json({ message: (error as Error).message });
  }
};

export const me = async (req: AuthRequest, res: Response) => {
  if (!req.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = await getUserById(req.userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json({
    id: user.id,
    email: user.email,
    name: user.name,
    avatarUrl: user.avatarUrl,
    createdAt: user.createdAt
  });
};
