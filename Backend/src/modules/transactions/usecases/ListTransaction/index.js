import { TransactionsRepository } from "../../repositories/TransactionRepository.js";
import { ListTransactionUseCase } from "./ListTransactionUseCase.js";
import { ListTransactionController } from "./ListTransactionController.js";

const transactionRepository = TransactionsRepository.getInstance();

const listTransactionUseCase = new ListTransactionUseCase(transactionRepository);

const listTransactionController = new ListTransactionController(listTransactionUseCase);

export { listTransactionController };