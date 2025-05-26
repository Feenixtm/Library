const bookshelfEl = document.querySelector("#book-shelf");
const newBookBtnEl = document.querySelector("#new-book-btn");
const bookInputFormEl = document.querySelector("#book-input-form");
const bookInputModalEl = document.querySelector("#book-input-modal");

const myLibrary = [];

function Book(id, title, author, pageCount) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
}

function addBookToLibrary(title, author, pageCount) {
    const id = crypto.randomUUID();
    const result = Book(id, title, author, pageCount)
    myLibrary.push(result);
}

function displayBooks() {
    let html = "";
    myLibrary.forEach(book => {
        html += `
            <div class="book-card">
                <h2>${book.title}</h2>
                <p>${book.author}</p>
                <p>${book.pageCount}</p>
            </div>`
    })

    bookshelfEl.innerHTML = html;
}

newBookBtnEl.addEventListener("click", (e) => {
    e.preventDefault();
    bookInputModalEl.showModal();
})

bookInputModalEl.addEventListener("click", (e) => {
    const dialogDimensions = bookInputModalEl.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        bookInputModalEl.close();
    }
})