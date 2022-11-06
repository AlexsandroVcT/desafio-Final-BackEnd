import { prisma } from "../../../../database/prisma/PrismaCliente.js"

export class DeleteTransactionUseCase {


    async execute(id) {

        await prisma.$connect();

        const deleteTransaction = await prisma.transactions.delete({
            where: {
                id,
            },
        });

        await prisma.$disconnect();

        return deleteTransaction;
    }
}