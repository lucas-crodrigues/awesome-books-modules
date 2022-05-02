import AddDate from './date.js';
import UI from '../index.js';
import BookCollection from './book-collection.js';

export default class Render {
  static renderBooks() {
    AddDate.addDate();
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = this.markupAllBooks();
    if (booksContainer.innerHTML === '') {
      booksList.classList.add('hide');
      document.getElementById('message').innerHTML = 'Sorry, there are no registered books. Add a book below:';
      addBook.classList.remove('hide');
    } else {
      document.getElementById('message').innerHTML = '';
    }
    UI.addEventListeners();
  }

  static markupAllBooks() {
    let allBooksHTML = '';
    BookCollection.getLocalStorage().forEach((book, index) => {
      allBooksHTML += `<div class="book" id="${book.title}">
                        <p class="title">"${book.title}" by ${book.author} </p>
                        <button type="button" class="shadow" id="r_${index}">Remove</button>
                      </div>`;
    });
    return allBooksHTML;
  }
}