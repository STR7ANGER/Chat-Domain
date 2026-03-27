import jwt from "jsonwebtoken";
import { env } from "./env.js";

export type JwtPayload = {
  userId: string;
};

const DEFAULT_EXPIRES_IN = "7d";

export const signToken = (payload: JwtPayload) => {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: DEFAULT_EXPIRES_IN });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, env.JWT_SECRET) as JwtPayload;
};
