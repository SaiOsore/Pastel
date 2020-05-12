import { selectTabNav, deselectTabContent } from '../utils/tabs'
import { toggleActive } from '../utils/helpers'

/*MENU BUTTON EVENTS*/
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const headerColor = header.getAttribute('data-theme');

menuBtn.addEventListener('click', function() {
  toggleActive(menu, 'active');
  toggleActive(menuBtn, 'active');
  toggleActive(document.body, 'body-fixed');
  if(document.body.getAttribute('data-theme') !== 'bw') {
    if(this.classList.contains('active')) {
      this.innerText = 'ЗАКРЫТЬ';
      header.dataset.theme = 'menu-white';
      footer.dataset.theme = 'menu-white';
    } else {
      this.innerText = 'МЕНЮ';
      if(headerColor) {
        header.dataset.theme = headerColor;
        footer.dataset.theme = headerColor;
      } else {
        header.removeAttribute('data-theme');
        footer.removeAttribute('data-theme');
      }
    }
  }
});

/*MENU IMAGES TABS*/
const tabNav = document.querySelectorAll('.menu-nav__item'),
      tabContent = document.querySelectorAll('.menu-nav-preview__item');

tabNav.forEach((item) => {
  item.addEventListener('mouseover', () => {
    selectTabNav(item, tabContent);
  });
  item.addEventListener('click', () => {
    selectTabNav(item, tabContent)
  });
  item.addEventListener('mouseout', () => {
    setTimeout(() => {
      deselectTabContent(tabContent);
    }, 2000);
  });
});