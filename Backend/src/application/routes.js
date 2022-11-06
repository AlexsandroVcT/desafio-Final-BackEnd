// Definição do caminho que você deve utilizar para acessar
import Router from "express";

import transactionsRoutes from "../routes/TransactionsRoutes.js";

const routes = Router();

// Métodos HTTP
// GET - Buscar/listar informações do nosso servidor
// POST - Publicar informações
// PUT - Atualização das informações
// PATCH - Atualização parcial das informações
// DELETE - Deleção da informação

routes.use(transactionsRoutes);

export default routes;