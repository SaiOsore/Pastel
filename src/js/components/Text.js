import waypoint from 'waypoints/lib/noframework.waypoints.min.js';
import anime from 'animejs/lib/anime.es.js';
import { convertToSpans } from '../utils/helpers';
import { SpecialLetters } from '../utils/letters';
import { GLOBAL_DELAY } from '../utils/constants';

const aboutPageEl = document.querySelectorAll('.about__text span');
const aboutPageSpans = [];

if(aboutPageEl) {
  convertToSpans(aboutPageEl, aboutPageSpans);
  SpecialLetters(aboutPageSpans);
}

const homeTitles = document.querySelectorAll('.home__link span');
const homeSections = document.querySelectorAll('.home__section');
const homeTitlesSpans = [];

const titlesAnimation = () => {
  homeSections.forEach(item => {
    const letters = item.querySelectorAll('.home__link .letter');
    const homeSectionsScroll = new Waypoint({
      element: item,
      handler: function() {
        const letterTranslation = anime({
          targets: letters,
          opacity: ['0', '1'],
          translateY: ['-150%', '0%'],
          easing: 'linear',
          duration: 100,
          delay: anime.stagger(80, {start: 0}),
        });
        this.destroy()
      },
      offset: '20%',
    });
  });
}

if(homeTitles) {
  convertToSpans(homeTitles, homeTitlesSpans);
  setTimeout(titlesAnimation, GLOBAL_DELAY);
}