import { prisma } from "../../../../database/prisma/PrismaCliente.js";

export class UpdateTransactionUseCase {

  async execute({ id, titulo, tipo, categoria, valor }) {

    await prisma.$connect();

    const updatedTransaction = await prisma.transactions.update({
      where: {
        id,
      },
      data: {
        titulo,
        tipo,
        categoria,
        valor
      },
    });

    await prisma.$disconnect();

    return updatedTransaction;
  }
}