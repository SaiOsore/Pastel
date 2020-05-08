import { selectTabNav, deselectTabContent } from '../utils/tabs'
import { toggleActive } from '../utils/helpers'

/*MENU BUTTON EVENTS*/
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const body = document.body;

menuBtn.addEventListener('click', function() {
  toggleActive(menu, 'active');
  toggleActive(menuBtn, 'active');
  toggleActive(document.body, 'body-fixed');
  if(this.classList.contains('active')) {
    this.innerText = 'ЗАКРЫТЬ';
    body.dataset.theme = 'bw';
  } else {
    this.innerText = 'МЕНЮ';
    body.dataset.theme = '';
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