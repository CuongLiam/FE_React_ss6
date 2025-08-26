class Book{
    id : number;
    title : string;
    author : string;
    stock : number;
    status : string;

    constructor(id : number, title : string, author : string, stock : number, status : string){
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }

    // getId(): number{
    //     return this.id;
    // }
    // getTitle(): string{
    //     return this.title;
    // }
    // getAuthor(): string{
    //     return this.author;
    // }
    // getStock(): number{
    //     return this.stock;
    // }
    // getStatus(): string{
    //     return this.status;
    // }
}

class Member{
    id : number;
    name : string;
    contact : string;
    lendedBooks : Book[] = [];
    status : string;
    
    constructor(id : number, name : string, contact : string, lendedBooks : Book[], status : string){
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }
}

class LendedBooks{
    memberId : number;
    bookId : number; 
    dueDate : string;

    constructor(memberId : number, bookId : number, dueDate: string){
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }

}

class Library{
    books : Book[] = [];
    members : Member[] = [];

    addBook(book : Book): void{
        this.books.push(book);
    }

    showBook(): void{
        this.books.forEach(book=>{
            console.log(`ID: ${book.id}: 
        title: ${book.title}
        author: ${book.author}
        stock: ${book.stock}
        status: ${book.status}
        ========`);
        })
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