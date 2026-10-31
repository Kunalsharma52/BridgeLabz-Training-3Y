
// Book class
class Book {

    constructor(title, author, ISBN, isIssued) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Issue book
    issueBook() {
        if (this.isIssued === false) {
            this.isIssued = true;
            return "Book issued successfully.";
        } else {
            return "Book is already issued.";
        }
    }

    // Return book
    returnBook() {
        if (this.isIssued === true) {
            this.isIssued = false;
            return "Book returned successfully.";
        } else {
            return "Book was not issued.";
        }
    }
}

// Create books
let books = [
    new Book("The Alchemist", "Paulo Coelho", "101", false),
    new Book("Wings of Fire", "A.P.J Abdul Kalam", "102", false),
    new Book("Atomic Habits", "James Clear", "103", true),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "104", false)
];

// Display available books
function showAvailableBooks() {

    console.log("\nAVAILABLE BOOKS");

    let availableBooks = books.filter(function(book) {
        return book.isIssued === false;
    });

    availableBooks.forEach(function(book) {
        console.log(
            book.title + " - " +
            book.author + " - ISBN: " + book.ISBN
        );
    });
}

// Search book using ISBN
function searchBook(isbn) {

    return books.find(function(book) {
        return book.ISBN === isbn;
    });
}

// Issue book
function issueByISBN(isbn) {

    let book = searchBook(isbn);

    if (book) {
        console.log(book.issueBook());
    } else {
        console.log("Book not found.");
    }
}

// Return book
function returnByISBN(isbn) {

    let book = searchBook(isbn);

    if (book) {
        console.log(book.returnBook());
    } else {
        console.log("Book not found.");
    }
}

// Run program
showAvailableBooks();

issueByISBN("101");

returnByISBN("103");

showAvailableBooks();
