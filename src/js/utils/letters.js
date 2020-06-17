import waypoint from 'waypoints/lib/noframework.waypoints.min.js';
import anime from 'animejs/lib/anime.es.js';
import { convertToSpans, timer } from '../utils/helpers';

const WEIGHTS = [500, 700, 900];
const MAX_ROTATE = 5;
const MAX_SCALE = 1;
const MIN_SCALE = 0.7;
const RANDOM = false;

export const SpecialLetters = (arr) => {
  const scaleDiff = MAX_SCALE - MIN_SCALE;
  arr.forEach((span) => {
    const rotate = MAX_ROTATE * (Math.random() - Math.random());
    const scale = MIN_SCALE + (scaleDiff * Math.random());
    if(RANDOM) {
      span.style.fontWeight = WEIGHTS[Math.floor(WEIGHTS.length * Math.random())];
    }
    span.style.transform = `rotate(${rotate}deg) scale(${scale})`;
  })
}

export const lettersAnimation = (section, elClassName, reverse = false) => {
  section.forEach(item => {
    const letters = item.querySelectorAll(`${elClassName}`);
    const SectionsScroll = new Waypoint({
      element: item,
      handler: function() {
        let letterTranslation;
        if(reverse) {
          letterTranslation = anime({
            targets: letters,
            opacity: ['1', '0'],
            translateY: ['0%', '-150%'],
            easing: 'easeInOutCirc',
            duration: 1000,
            delay: anime.stagger(100, {start: 0}),
          });
        } else {
          letterTranslation = anime({
            targets: letters,
            opacity: ['0', '1'],
            translateY: ['-150%', '0%'],
            easing: 'easeInOutCirc',
            duration: 1000,
            delay: anime.stagger(100, {start: 0}),
          });
        }
        this.destroy()
      },
      offset: '70%',
    });
  });
}

export const titleAnimation = (delay = GLOBAL_DELAY, title, section, letters, reverse = false) => {
  convertToSpans(title);
  if(reverse) {
    lettersAnimation(section, letters, reverse = true);
  } else {
    timer(lettersAnimation, delay, section, letters);
  }
}

export const wordAnimation = (words) => {
  words.forEach(word => {
    const wordTranslation = anime({
      targets: word,
      opacity: ['0', '1'],
      translateY: ['-30%', '0%'],
      easing: 'linear',
      duration: 1000,
      delay: anime.stagger(400, {start: 100}),
    });
  });
}