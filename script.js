let myLibrary = [];

const container = document.getElementById('container');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages , read));
}

addBookToLibrary("Lord of the Rings", "J.R.R Tolkien", 300, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("Idoru", "William Gibson", 304, true);

for (let book in myLibrary) {
    const div = document.createElement('div');
    div.classList.add('book');
    div.setAttribute('data-book-number', book);
    div.textContent = `Title: ${myLibrary[book].title} Author: ${myLibrary[book].author} Pages: ${myLibrary[book].pages}`
    container.appendChild(div);
}