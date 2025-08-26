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
    
    constructor(id : number, name : string, contact : string, status : string){
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        // this.lendedBooks = lendedBooks;
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
let count = 0;
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

    registerMember(newMember : Member): void{
        this.members.push(newMember);
    }

    blockMember(id : number): void{
        //not concise
        // let foundMemberIdx = this.members.findIndex(mem => mem.id === id);

        // if(foundMemberIdx != -1){
        //     if(this.members[foundMemberIdx]){
        //         this.members[foundMemberIdx].status = "blocked";
        //     }
        // } else{
        //     console.log(`cannot find id : ${id}`);
        // }

        // more concisely
        let foundMember = this.members.find(mem=> mem.id === id);

        if(foundMember){
            foundMember.status = "blocked";
        } else{
            console.log(`cannot find this id: ${id}`);
        }
    }

    showMembers(): void{
        this.members.forEach(mem=>{
            console.log(`${mem.id}: 
                ${mem.name},
                ${mem.contact},
                ${mem.status}
                ============`);
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

// libraryA.showBook();


let mem1 = new Member(1, "ABC", "abc@gmail.com", "dead");
let mem2 = new Member(2, "DEF", "def@gmail.com", "dead");
let mem3 = new Member(3, "GHI", "ghi@gmail.com", "dead");


libraryA.registerMember(mem1);
libraryA.registerMember(mem2);
libraryA.registerMember(mem3);

libraryA.showMembers();

libraryA.blockMember(2);

console.log(`=============`);
libraryA.showMembers();
