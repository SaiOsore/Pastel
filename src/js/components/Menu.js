import { selectTabNav, deselectTabContent } from '../utils/tabs'
import { toggleClassName } from '../utils/helpers'

import waypoint from 'waypoints/lib/noframework.waypoints.min.js';
import anime from 'animejs/lib/anime.es.js';

/*MENU BUTTON EVENTS*/
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNavItems = document.querySelectorAll('.menu-nav__item');
const menuSocials = document.querySelector('.menu__socials');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const headerColor = header.getAttribute('data-theme');

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