import { Transaction } from "../models/Transaction.js";

export class TransactionsRepository {
  transactions;

  static INSTANCE;

  constructor() {
    this.transactions = [];
  }

  static getInstance() {
    if (!TransactionsRepository.INSTANCE) {
     TransactionsRepository.INSTANCE = new TransactionsRepository();
    }

    return TransactionsRepository.INSTANCE;
  }

  create({ titulo, valor, tipo, categoria }) {
    const transaction = new Transaction();

    Object.assign(transactions, {
      titulo,
      valor,
      tipo,
      categoria,
      created_at: new Date(),
    });
    
    // this.transaction = [];
    this.transactions.push(transaction);

    return transaction;
  }
  
  list() {
    return this.transactions;
  }

  deleteById(id) {
    const index = this.transactions.findIndex((transaction) => transaction.id === id);
  
    this.transactions.splice(index, 1);
  
    return;
  }  
}
