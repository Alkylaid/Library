let myLibrary = [];

const library = document.getElementById('library');
const createBookButton = document.getElementById('createBook');
const overlay = document.getElementById('overlay');
const bookForm = document.getElementById('bookForm');
const closeButton = document.getElementById('close-button')


overlay.addEventListener('click', (e) => {
    let clicked = e.target;
    if (clicked.closest('#bookFormWrapper')){
        return;
    } else {
        overlay.classList.remove('active');
    }});

createBookButton.addEventListener('click', () => {
    overlay.classList.add('active');
});

closeButton.addEventListener('click', () => {
    overlay.classList.remove('active');
    bookForm.reset();
})

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    addBookToLibrary(title, author, pages, read);
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
addBookToLibrary("Test Book", "Test", 234, true);
updateBookDisplay("Test Book");

function updateBookDisplay(title) {
    const index = myLibrary.findIndex(book => {return book.title === title});
    let div = document.createElement('div');
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

    const readStatus = document.createElement('div');
    readStatus.setAttribute('id', "read-status");
    if(myLibrary[index].read) {
        readStatus.style.backgroundColor = "#22c55e";
        readStatus.innerHTML = `<p id="read-status-text">Read</p>`;
    } else {
        readStatus.innerHTML = `<p id="read-status-text">Not Read</p>`;
    }
    div.appendChild(readStatus); 

    const removeBookButton = document.createElement('div');
    removeBookButton.setAttribute('id', 'remove-book');
    readStatus.appendChild(removeBookButton);

    removeBookButton.addEventListener('click', () => {
        library.removeChild(div);
        myLibrary = myLibrary.filter(book => book.title != title);
        console.log(myLibrary);
        
    });
    library.insertBefore(div, createBookButton);
}
console.log(myLibrary);