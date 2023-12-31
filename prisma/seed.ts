import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { Role } from "@prisma/client";

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "user@user.com" },
    update: {},
    create: {
      email: "user@user.com",
      password: await hash("password", 10),
    },
  });
  const user2 = await prisma.user.upsert({
    where: { email: "admin@user.com" },
    update: {},
    create: {
      email: "admin@user.com",
      password: await hash("password", 10),
      role: Role.ADMIN,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
