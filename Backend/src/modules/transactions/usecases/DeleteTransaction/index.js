import { TransactionsRepository } from "../../repositories/TransactionRepository.js";
import { DeleteTransactionUseCase } from "./DeleteTransactionUseCase.js";
import { DeleteTransactionController } from "./DeleteTransactionController.js";


const transactionRepository = TransactionsRepository.getInstance();

const deleteTransactionUseCase = new DeleteTransactionUseCase(transactionRepository);

const deleteTransactionController = new DeleteTransactionController(deleteTransactionUseCase);

export { deleteTransactionController };