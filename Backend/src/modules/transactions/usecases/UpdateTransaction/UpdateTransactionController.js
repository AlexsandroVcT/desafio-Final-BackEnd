import { UpdateTransactionUseCase } from "./UpdateTransactionUseCase.js";

export class UpdateTransactionController {
  constructor() {
    this.updateTransactionUseCase = new UpdateTransactionUseCase();
  }

  handle(request, response) {
    const { id } = request.params;
    const { titulo, tipo, categoria, valor } = request.body;

    this.updateTransactionUseCase.execute({
      id,
      titulo,
      tipo,
      categoria,
      valor
    });

    return response.status(204).send();
  }
}