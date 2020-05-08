import { selectTabNav, deselectTabContent } from '../utils/tabs'
import { toggleActive } from '../utils/helpers'

/*MENU BUTTON EVENTS*/
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

menuBtn.addEventListener('click', function() {
  toggleActive(menu, 'active');
  toggleActive(menuBtn, 'active');
  toggleActive(document.body, 'body-fixed');
  if(document.body.getAttribute('data-theme') !== 'bw') {
    if(this.classList.contains('active')) {
      this.innerText = 'ЗАКРЫТЬ';
      header.dataset.theme = 'bw';
      footer.dataset.theme = 'bw';
    } else {
      this.innerText = 'МЕНЮ';
      header.removeAttribute('data-theme');
      footer.removeAttribute('data-theme');
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
  // item.addEventListener('mouseout', () => {
  //   deselectTabContent(tabContent);
  // });
});