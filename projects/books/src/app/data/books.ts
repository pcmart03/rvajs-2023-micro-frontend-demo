import { Book } from "../interfaces/book.interface";

export const BOOKS_DATA: Array<Book> = [
    { id: 1, name: "Dune", author: "Frank Herber", genre: "Science Fiction", year: new Date("January 1, 1965")},
    { id: 2, name: "A Clockwork Orange", author: "Anthony Burgess", genre: "Science Fiction", year: new Date("January 1, 1963")},
    { id: 3, name: "To Kill a Mockingbird", author: "Harper Lee", genre: "Science Fiction", year: new Date("July 11, 1960")},
    { id: 4, name: "The Shining", author: "Stephen King", genre: "Horror", year: new Date("January 1, 1977")},
    { id: 5, name: "Sophie's Choice", author: "William Styron", genre: "Fiction", year: new Date("January 1, 1979")},
    { id: 6, name: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction", year: new Date("October 12, 1979")}
]