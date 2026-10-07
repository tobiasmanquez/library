import { Author } from "./Author.js";
import { Book } from "./Book.js";
import { Loan } from "./Loan.js";
import { User } from "./users.js";


// Relaciones
// ──────────
Book.hasMany(Loan, { foreignKey: "book_id", as: "loans", onDelete: "RESTRICT" });
Loan.belongsTo(Book, { foreignKey: "book_id", as: "book", onDelete: "RESTRICT" });

export { Author, Book, Loan,User };