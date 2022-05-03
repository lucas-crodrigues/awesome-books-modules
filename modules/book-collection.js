let books = JSON.parse(localStorage.getItem('books')) || [];

export default class BookCollection {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBook = (e) => {
    e.preventDefault();
    const ititle = document.getElementById('addTitle').value;
    const iauthor = document.getElementById('addAuthor').value;
    books.push({ title: ititle, author: iauthor });
    localStorage.setItem('books', JSON.stringify(books));
    document.querySelectorAll('form input').forEach((element) => {
      element.value = '';
    });
    document.getElementById('message').innerHTML = '';
  }

  static removeBook = (e) => {
    const button = e.target;
    const bookIndex = Number(button.id.split('_')[1]);
    books = books.filter((book, index) => index !== bookIndex);
    localStorage.setItem('books', JSON.stringify(books));
    return books;
  }

  static getLocalStorage = () => {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    return books;
  }

  static markupAllBooks() {
    let allBooksHTML = '';
    this.getLocalStorage().forEach((book, index) => {
      allBooksHTML += `<div class="book" id="${book.title}">
                        <p class="title">"${book.title}" by ${book.author} </p>
                        <button type="button" class="shadow" id="r_${index}">Remove</button>
                      </div>`;
    });
    return allBooksHTML;
  }
}