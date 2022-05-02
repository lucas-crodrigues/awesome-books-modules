import AddDate from './date.js';
import Switch from './switch-view.js';
import BookCollection from './book-collection.js';

const booksList = document.getElementById('booksList');
const addBook = document.getElementById('addBook');

export default class Render {
  static renderBooks() {
    AddDate.addDate();
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = BookCollection.markupAllBooks();
    if (booksContainer.innerHTML === '') {
      booksList.classList.add('hide');
      document.getElementById('message').innerHTML = 'Sorry, there are no registered books. Add a book below:';
      addBook.classList.remove('hide');
    } else {
      document.getElementById('message').innerHTML = '';
    }
    Render.addEventListeners();
  }

  static addEventListeners = () => {
    const addForm = document.getElementById('addBook');
    addForm.addEventListener('submit', BookCollection.addBook);

    const removeButtons = Array.from(document.querySelectorAll('.book button'));
    removeButtons.forEach((button) => {
      button.addEventListener('click', BookCollection.removeBook);
      button.addEventListener('click', Render.renderBooks);
    });

    const addBook = document.getElementById('navAdd');
    const booksList = document.getElementById('navList');
    const contactInfo = document.getElementById('navContact');
    addBook.addEventListener('click', (e) => Switch.switchView(e));
    booksList.addEventListener('click', (e) => Switch.switchView(e));
    booksList.addEventListener('click', Render.renderBooks);
    contactInfo.addEventListener('click', (e) => Switch.switchView(e));
  }
}