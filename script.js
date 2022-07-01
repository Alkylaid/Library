let myLibrary = [];

const library = document.getElementById('library');

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


    const bookTitle = document.createElement('p');
    bookTitle.setAttribute('id', "book-title");
    bookTitle.innerHTML = `Title: ${myLibrary[book].title}`;
    div.appendChild(bookTitle);


    const authorName = document.createElement('p');
    authorName.setAttribute('id',"author-name");
    authorName.innerHTML = `Author: ${myLibrary[book].author}`;
    div.appendChild(authorName);


    const pageNumber = document.createElement('p');
    pageNumber.setAttribute('id', "page-numbers");
    pageNumber.innerHTML = `Pages: ${myLibrary[book].pages}`;
    div.appendChild(pageNumber);

    library.appendChild(div);
}