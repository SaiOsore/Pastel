import { selectTabNav, deselectTabContent } from '../utils/tabs';
import { toggleClassName, focusOnElement, showImg } from '../utils/helpers';

import waypoint from 'waypoints/lib/noframework.waypoints.min.js';
import anime from 'animejs/lib/anime.es.js';

/*MENU BUTTON EVENTS*/
const menu = document.querySelector('.menu'),
      menuBtn = document.querySelector('.menu-btn'),
      menuNavItems = document.querySelectorAll('.menu-nav__item'),
      menuSocials = document.querySelector('.menu__socials'),
      header = document.querySelector('.header'),
      footer = document.querySelector('.footer'),
      headerColor = header.getAttribute('data-theme');

focusOnElement(menu);

menuBtn.addEventListener('click', function() {
  const menuOpenAnimation = anime({
    targets: menu,
    easing: 'linear',
    duration: 600,
    begin: function() {
      toggleClassName(menu, 'active');
      toggleClassName(menuBtn, 'active');
      toggleClassName(document.body, 'body-fixed');
      if(document.body.getAttribute('data-theme') !== 'bw') {
        if(menuBtn.classList.contains('active')) {
          menuBtn.innerText = 'ЗАКРЫТЬ';
          header.dataset.theme = 'menu-white';
          footer.dataset.theme = 'menu-white';
        } else {
          menuBtn.innerText = 'МЕНЮ';
          if(headerColor) {
            header.dataset.theme = headerColor;
            footer.dataset.theme = headerColor;
          } else {
            header.removeAttribute('data-theme');
            footer.removeAttribute('data-theme');
          }
        }
      }
      focusOnElement(menu);
    },
    complete: function() {
      let menuNavAnimation,
          menuSocialsAnimation;

      if(menuBtn.classList.contains('active')) {
        menuNavAnimation = anime({
          targets: menuNavItems,
          opacity: ['0', '1'],
          translateY: ['50%', '0%'],
          easing: 'linear',
          duration: 300,
          delay: anime.stagger(100, {start: 0}),
        });

        menuSocialsAnimation = anime({
          targets: menuSocials,
          opacity: ['0', '1'],
          easing: 'linear',
          duration: 500,
        });

      } else {
        menuNavAnimation = anime({
          targets: menuNavItems,
          opacity: ['1', '0'],
          translateY: ['0%', '50%'],
          easing: 'linear',
          duration: 300,
          delay: anime.stagger(100, {start: 0}),
        });

        menuSocialsAnimation = anime({
          targets: menuSocials,
          opacity: ['1', '0'],
          easing: 'linear',
          duration: 500,
        });
      }
    },
  });
});

/*MENU IMAGES TABS*/
const tabNav = document.querySelectorAll('.menu-nav__item'),
      tabContent = document.querySelectorAll('.menu-nav-preview__item');

tabNav.forEach((item) => {
  item.addEventListener('mouseover', () => {
    showImg();
    selectTabNav(item, tabContent);
  });
  item.addEventListener('click', () => {
    showImg();
    selectTabNav(item, tabContent)
  });
  // uncomment, if you want to close img on mouseout event
  // item.addEventListener('mouseout', () => {
  //   setTimeout(() => {
  //     deselectTabContent(tabContent);
  //   }, 2000);
  // });
});