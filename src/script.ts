import { prisma } from "./lib/prisma";

// Os PATHs para o banco de dados tem que ser iguais aos que foram definidos no schema.prisma

async function main() {
  const user = await prisma.usuario.create({
    data: {
      nome: "Alice",
      email: "alice@prisma.io",
      pedidos: {
        create: {
          produto: "Notebook",
          quantidade: 1,
        },
      },
    },
    include: {
      pedidos: true,
    },
  });
  console.log("Created user:", user);

  // Fetch all users with their posts
  const allUsers = await prisma.usuario.findMany({
    include: {
      pedidos: true,
    },
  });
  console.log("All users:", JSON.stringify(allUsers, null, 2));
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