import { convertToSpans, timer } from '../utils/helpers';
import { lettersAnimation, SpecialLetters, wordAnimation } from '../utils/letters';
import { GLOBAL_DELAY } from '../utils/constants';
import anime from 'animejs/lib/anime.es.js';

/*ABOUT PAGE TEXT CONVERT*/
const aboutPageSection = document.querySelectorAll('.about .section');
const aboutPageEl = document.querySelectorAll('.about__text span');
const aboutPageLetters = '.about__text .letter';
const aboutPageSpans = [];

if(aboutPageEl) {
  convertToSpans(aboutPageEl, aboutPageSpans);
  SpecialLetters(aboutPageSpans);
  const aboutWords = document.querySelectorAll('.about .word');
  aboutWords.forEach((word) => {
    word.style.opacity = '0';
  });
  timer(wordAnimation, GLOBAL_DELAY, aboutWords);
}

/*MAIN TITLES ANIMATION*/
const titlesMain = document.querySelectorAll('.title--main');
const titleMainLetters = '.title--main .letter';
const titleSections = document.querySelectorAll('.section');

if(titlesMain) {
  convertToSpans(titlesMain);
  timer(lettersAnimation, GLOBAL_DELAY, titleSections, titleMainLetters);
}