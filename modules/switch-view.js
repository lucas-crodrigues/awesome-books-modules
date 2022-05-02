import Render from './render.js';

export default class Switch {
  static switchView = (e) => {
    switch (e.target.id) {
      case 'navList':
        booksList.classList.remove('hide');
        contactInfo.classList.add('hide');
        addBook.classList.add('hide');
        Render.renderBooks();
        break;
      case 'navContact':
        booksList.classList.add('hide');
        contactInfo.classList.remove('hide');
        addBook.classList.add('hide');
        break;
      case 'navAdd':
        booksList.classList.add('hide');
        contactInfo.classList.add('hide');
        addBook.classList.remove('hide');
        break;
      default:
        break;
    }
  };
}