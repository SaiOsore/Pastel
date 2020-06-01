import { convertToSpans, timer } from '../utils/helpers';
import { lettersAnimation, SpecialLetters } from '../utils/letters';
import { GLOBAL_DELAY } from '../utils/constants';
import anime from 'animejs/lib/anime.es.js';

/*ABOUT PAGE TEXT CONVERT*/
const aboutPageEl = document.querySelectorAll('.about__text span');
const aboutPageSpans = [];

if(aboutPageEl) {
  convertToSpans(aboutPageEl, aboutPageSpans);
  SpecialLetters(aboutPageSpans);
}

/*MAIN TITLES ANIMATION*/
const titlesMain = document.querySelectorAll('.title--main');
const titleMainLetters = '.title--main .letter';
const titleSections = document.querySelectorAll('.section');

if(titlesMain) {
  convertToSpans(titlesMain);
  timer(lettersAnimation, GLOBAL_DELAY, titleSections, titleMainLetters);
}