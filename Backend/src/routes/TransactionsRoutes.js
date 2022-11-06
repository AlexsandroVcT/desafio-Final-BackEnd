import Router from "express";
import "express-async-errors";

const transactionsRoutes = Router();

import { createTransactionController } from "../modules/transactions/usecases/CreateTransaction/index.js";
import { listTransactionController } from "../modules/transactions/usecases/ListTransaction/index.js";
import { deleteTransactionController } from "../modules/transactions/usecases/DeleteTransaction/index.js";
import { updateTransactionController } from "../modules/transactions/usecases/UpdateTransaction/index.js"


// Rota de criação de transações
transactionsRoutes.post("/transactions", (request, response) => {
  return createTransactionController.handle(request, response);
});

// Rota de listagem de transações
transactionsRoutes.get("/transactions", (request, response) => {
  return listTransactionController.handle(request, response);
});

transactionsRoutes.put("/:id", (request, response) => {
  return updateTransactionController.handle(request, response);
});

// Rota de deleção de transações
transactionsRoutes.delete("/:id", (request, response) => {
  return deleteTransactionController.handle(request, response);
});

export default transactionsRoutes;