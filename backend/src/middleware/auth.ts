import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../lib/jwt.js";

export type AuthRequest = Request & { userId?: string };

export const requireAuth = (req: AuthRequest, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined;

  if (!token) {
    return res.status(401).json({ message: "Missing token" });
  }

  try {
    const payload = verifyToken(token);
    req.userId = payload.userId;
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};
