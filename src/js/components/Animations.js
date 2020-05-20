import waypoint from 'waypoints/lib/noframework.waypoints.min.js';
import anime from 'animejs/lib/anime.es.js';

/*PRELOADER*/
const preloader = document.querySelector('.preloader');

const isPreloaderLoaded = () => {
  document.body.classList.remove('body-fixed');
  preloader.classList.add('hidden');
};

const preloaderAnim = {
  targets: preloader,
  delay: 1500,
  opacity: {
    value: 0,
    duration: 300,
    easing: 'linear',
  },
  offset: '+=100',
  complete: function() {
    isPreloaderLoaded();
  }
};

const tlPreloader = anime.timeline({
  autoplay: false,
  duration: 500
});

tlPreloader
.add(preloaderAnim)
tlPreloader.play();

var preloaderCounter = document.querySelector('.preloader__end');

var counter = {
  nums: '0',
}

anime({
  targets: counter,
  nums: '100',
  round: 1,
  easing: 'linear',
  duration: 1500,
  update: function() {
    preloaderCounter.innerHTML = counter.nums;
  }
});

var preloaderCounterLine = document.querySelector('.preloader__line');

anime({
  targets: preloaderCounterLine,
  width: '100%',
  easing: 'linear',
  duration: 1500,
});

var preloaderSVG = anime({
  targets: '.preloader__icon svg',
  scale: 2,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad',
  autoplay: true
});