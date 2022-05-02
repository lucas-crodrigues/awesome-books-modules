import BookCollection from './modules/book-collection.js';
import Switch from './modules/switch-view.js';
import Render from './modules/render.js';

export default class UI {
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

Render.renderBooks();