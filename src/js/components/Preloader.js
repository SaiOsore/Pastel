import anime from 'animejs/lib/anime.es.js';
import { GLOBAL_DELAY } from '../utils/constants';

/*PRELOADER*/
const preloader = document.querySelector('.preloader');

const bodyFixed = () => {
  document.body.classList.add('body-fixed');
};

const isPreloaderLoaded = () => {
  document.body.classList.remove('body-fixed');
  preloader.classList.add('hidden');
};

window.onload = function() {
  setTimeout(function() {
    isPreloaderLoaded();
  }, GLOBAL_DELAY);
}

const preloaderAnim = {
  targets: preloader,
  delay: GLOBAL_DELAY,
  opacity: {
    value: 0,
    duration: 300,
    easing: 'linear',
  },
  offset: '+=100',
  begin: function() {
    bodyFixed();
  },
  complete: function() {

  }
};

const tlPreloader = anime.timeline({
  autoplay: false,
  duration: 500
});

tlPreloader
.add(preloaderAnim)
tlPreloader.play();

const preloaderCounter = document.querySelector('.preloader__end');

const counter = {
  nums: '0',
}

const preloaderCounterAnimation =  anime({
  targets: counter,
  nums: '100',
  round: 1,
  easing: 'linear',
  duration: GLOBAL_DELAY,
  update: function() {
    preloaderCounter.innerHTML = counter.nums;
  }
});

const preloaderCounterLine = document.querySelector('.preloader__line');

const preloaderCounterLineAnimation = anime({
  targets: preloaderCounterLine,
  width: '100%',
  easing: 'linear',
  duration: GLOBAL_DELAY,
});

const preloaderSVGAnimation = anime({
  targets: '.preloader__icon svg',
  scale: 2,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad',
  autoplay: true
});