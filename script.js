let myLibrary = [];

const library = document.getElementById('library');
const createBookButton = document.getElementById('createBook');
const overlay = document.getElementById('overlay');
const bookForm = document.getElementById('bookForm');

createBookButton.addEventListener('click', () => {
    overlay.classList.add('active');
});

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    addBookToLibrary(title, author, pages,);
    updateBookDisplay(title);
    overlay.classList.remove('active');
    bookForm.reset();
    
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages , read));
}

function updateBookDisplay(title) {
    const index = myLibrary.findIndex(book => {return book.title === title});
    const div = document.createElement('div');
    div.classList.add('book');
    div.setAttribute('data-book-number', index);


    const bookTitle = document.createElement('p');
    bookTitle.setAttribute('id', "book-title");
    bookTitle.innerHTML = `Title: ${myLibrary[index].title}`;
    div.appendChild(bookTitle);


    const authorName = document.createElement('p');
    authorName.setAttribute('id',"author-name");
    authorName.innerHTML = `Author: ${myLibrary[index].author}`;
    div.appendChild(authorName);


    const pageNumber = document.createElement('p');
    pageNumber.setAttribute('id', "page-numbers");
    pageNumber.innerHTML = `Pages: ${myLibrary[index].pages}`;
    div.appendChild(pageNumber);

    library.appendChild(div);
}