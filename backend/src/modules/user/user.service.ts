import { prisma } from "../../lib/db.js";

export const getUserById = (id: string) => {
  return prisma.user.findUnique({
    where: { id }
  });
};
