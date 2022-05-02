export default class AddDate {
  static addDate = () => {
    const dateDiv = document.getElementById('date');
    const date = Date().split(' ').splice(0, 5).join(' ');
    dateDiv.textContent = date;
  };
}