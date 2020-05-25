import { convertToSpans } from '../utils/helpers';
import { lettersAnimation, SpecialLetters } from '../utils/letters';
import { GLOBAL_DELAY } from '../utils/constants';

const aboutPageEl = document.querySelectorAll('.about__text span');
const aboutPageSpans = [];

if(aboutPageEl) {
  convertToSpans(aboutPageEl, aboutPageSpans);
  SpecialLetters(aboutPageSpans);
}

const homeTitles = document.querySelectorAll('.home__link span');
const homeSections = document.querySelectorAll('.home__section');
const homeTitleLetters = '.home__link .letter';
const homeTitlesSpans = [];

if(homeTitles) {
  convertToSpans(homeTitles, homeTitlesSpans);
  setTimeout(() => {
    lettersAnimation(homeSections, homeTitleLetters);
  }, GLOBAL_DELAY);
}

const titlesMain = document.querySelectorAll('.title--main');
const titleMainLetters = '.title--main .letter';
const titleSections = document.querySelectorAll('.section');
const titlesSpans = [];

if(titlesMain) {
  convertToSpans(titlesMain, titlesSpans);
  setTimeout(() => {
    lettersAnimation(titleSections, titleMainLetters);
  }, GLOBAL_DELAY);
}