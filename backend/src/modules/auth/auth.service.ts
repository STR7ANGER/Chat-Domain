import { OAuth2Client } from "google-auth-library";
import { prisma } from "../../lib/db.js";
import { env } from "../../lib/env.js";
import { hashPassword, verifyPassword } from "../../lib/password.js";
import { signToken } from "../../lib/jwt.js";

const googleClient = new OAuth2Client(env.GOOGLE_CLIENT_ID);

const publicUserSelect = {
  id: true,
  email: true,
  name: true,
  avatarUrl: true,
  createdAt: true
};

export const registerWithEmail = async (email: string, password: string, name: string, avatarUrl?: string) => {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw new Error("Email already in use");
  }

  const passwordHash = await hashPassword(password);
  const user = await prisma.user.create({
    data: { email, passwordHash, name, avatarUrl },
    select: publicUserSelect
  });

  const token = signToken({ userId: user.id });
  return { user, token };
};

export const loginWithEmail = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.passwordHash) {
    throw new Error("Invalid credentials");
  }

  const ok = await verifyPassword(password, user.passwordHash);
  if (!ok) {
    throw new Error("Invalid credentials");
  }

  const token = signToken({ userId: user.id });
  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      avatarUrl: user.avatarUrl,
      createdAt: user.createdAt
    },
    token
  };
};

export const loginWithGoogle = async (idToken: string) => {
  const ticket = await googleClient.verifyIdToken({
    idToken,
    audience: env.GOOGLE_CLIENT_ID
  });

  const payload = ticket.getPayload();
  if (!payload || !payload.email || !payload.sub) {
    throw new Error("Invalid Google token");
  }

  const email = payload.email;
  const name = payload.name || "Unknown";
  const avatarUrl = payload.picture || undefined;
  const googleId = payload.sub;

  const existingByEmail = await prisma.user.findUnique({ where: { email } });

  let user;
  if (existingByEmail) {
    user = await prisma.user.update({
      where: { id: existingByEmail.id },
      data: {
        googleId: existingByEmail.googleId ?? googleId,
        avatarUrl: existingByEmail.avatarUrl ?? avatarUrl
      },
      select: publicUserSelect
    });
  } else {
    user = await prisma.user.create({
      data: {
        email,
        name,
        avatarUrl,
        googleId
      },
      select: publicUserSelect
    });
  }

  const token = signToken({ userId: user.id });
  return { user, token };
};
