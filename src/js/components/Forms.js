import { selectTabNav, selectRadioButtons, deselectRadioButtons } from '../utils/tabs'

const inputs = document.querySelectorAll('.form__input');

function addFocus() {
  let parent = this.parentNode;
  const label = parent.querySelector('label');
  label.classList.add('focus');
  this.classList.add('form__input--border');
}

function removeFocus() {
  let parent = this.parentNode;
  if(this.value === '') {
    this.classList.remove('form__input--border');
    const label = parent.querySelector('label');
    label.classList.remove('focus');
  }
}

inputs.forEach((input) => {
  input.addEventListener('focus', addFocus);
  input.addEventListener('blur', removeFocus);
});

/*FORMS TABS*/
const tabNav = document.querySelectorAll('.tab-nav'),
      tabContent = document.querySelectorAll('.tab-content'),
      tabsContainer = document.querySelector('.tabs-container');

tabNav.forEach((item) => {
  item.addEventListener('click', () => {
    selectTabNav(item, tabContent);
    if(item.type == "radio" && item.checked) {
      tabsContainer.classList.add('active');
    } else {
      tabsContainer.classList.remove('active');
    }
  });
});