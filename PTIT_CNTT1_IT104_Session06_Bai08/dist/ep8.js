class Book {
    id;
    title;
    author;
    stock;
    status;
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    id;
    name;
    contact;
    lendedBooks = [];
    status;
    constructor(id, name, contact, lendedBooks, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }
}
class LendedBooks {
    memberId;
    bookId;
    dueDate;
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    books = [];
    members = [];
    addBook(book) {
        this.books.push(book);
    }
    showBook() {
        this.books.forEach(book => {
            console.log(`ID: ${book.id}: 
        title: ${book.title}
        author: ${book.author}
        stock: ${book.stock}
        status: ${book.status}
        ========`);
        });
    }
}
let book1 = new Book(1, "hello world", "albert Josh", 12, "available");
let book2 = new Book(2, "hello vlasd", "albert olsen", 22, "available");
let book3 = new Book(3, "hello haha", "albert loria", 33, "unavailable");
let libraryA = new Library();
libraryA.addBook(book1);
libraryA.addBook(book2);
libraryA.addBook(book3);
libraryA.showBook();
export {};
//# sourceMappingURL=ep8.js.map