import { debounce, timer } from '../utils/helpers';
import { GLOBAL_DELAY } from '../utils/constants';
import { titleAnimation } from '../utils/letters';
import { imgAnimation } from '../utils/animations';

const homeContainer = document.querySelector('.home .container');
const homeTitles = document.querySelectorAll('.home__link span');
const homeSections = document.querySelectorAll('.home__section');
const homeTitleLetters = '.home__link .letter';

/*HOME ANIMATIONS FUNCTIONALITY*/
const HomeSectionAnimation = (reverse = false, activeName = '.home__section.active', element = '.home__img-container') => {
  const activeSection = document.querySelector(`${activeName}`);

  if(activeSection) {
    const mainImgContainers = activeSection.querySelectorAll(`${element}`);
    const mainImgContainer = mainImgContainers[0];

    imgAnimation(mainImgContainer, 0, reverse);
    titleAnimation(1200, homeTitles, homeSections, homeTitleLetters, reverse);
  }
}

/*FIRST RENDER ANIMATION INITIALIZATION*/
if(homeTitles) {
  timer(function() {
    HomeSectionAnimation();
  }, GLOBAL_DELAY - 200);
}

/*CUSTOM SLIDER*/
if(homeContainer) {

  const homeSections = document.querySelectorAll('.home__section');
  const homeContainerHeight = homeSections[0].clientHeight;
  const sliderTimer = GLOBAL_DELAY;
  let length = 0;
  let autoplay = false;
  let prevLength;

  /*REVERSE MAIN ANIMATION*/
  const HomeSectionAnimationRev = debounce(() => {
    HomeSectionAnimation(true);
  }, sliderTimer);

  /*FUNCTIONALITY*/
  const autoplayStart = (autoplay = false) => {
    if(autoplay) {
      setInterval(() => {
        nextSlide();
      }, 10000);
    }
  }

  const prevSlideBody = (e) => {
    if(length === 0) {
      length = homeSections.length - 1;
      prevLength = 0;
    } else {
      length--;
      prevLength = length + 1;
    }
    homeSections[prevLength].classList.remove('active');
    homeSections[length].classList.add('active');
    HomeSectionAnimation();
  }

  const nextSlideBody = (e) => {
    if(length === homeSections.length - 1) {
      length = 0;
      prevLength = homeSections.length - 1;
    } else {
      length++;
      prevLength = length - 1;
    }
    homeSections[prevLength].classList.remove('active');
    homeSections[length].classList.add('active');
    HomeSectionAnimation();
  }

  const prevSlide = debounce(prevSlideBody, sliderTimer);
  const nextSlide = debounce(nextSlideBody, sliderTimer);

  /*LISTENERS*/

  /*WHEEL LISTENER*/
  homeContainer.addEventListener('wheel', (e) => {
    let moved = e.wheelDelta;
    HomeSectionAnimationRev();
    if(moved > 0) {
      timer(prevSlide, sliderTimer);
    } else if(moved < 0) {
      timer(nextSlide, sliderTimer);
    }
  });

  /*KEYS LISTENER*/
  window.addEventListener('keydown', (e) => {
    HomeSectionAnimationRev();
    if(e.keyCode == '38' || e.keyCode == '37') {
      timer(prevSlide, sliderTimer);
    }
    if(e.keyCode == '40' || e.keyCode == '39') {
      timer(nextSlide, sliderTimer);
    }
  });

  /*TOUCH LISTENER*/
  let initialPoint,
      finalPoint;

  homeContainer.addEventListener('touchstart', function(event) {
    initialPoint = event.changedTouches[0];
  }, false);

  homeContainer.addEventListener('touchend', function(event) {
    finalPoint=event.changedTouches[0];
    let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);

    if (xAbs > 20 || yAbs > 20) {
      if(xAbs > yAbs) {
        if (finalPoint.pageX < initialPoint.pageX) {
          /*SWIPE LEFT*/
          HomeSectionAnimationRev();
          timer(prevSlide, sliderTimer);
        } else {
          /*SWIPE RIGHT*/
          HomeSectionAnimationRev();
          timer(nextSlide, sliderTimer);
        }
      } else {
        if(finalPoint.pageY < initialPoint.pageY) {
          /*SWIPE UP*/
          HomeSectionAnimationRev();
          timer(prevSlide, sliderTimer);
        } else {
          /*SWIPE DOWN*/
          HomeSectionAnimationRev();
          timer(nextSlide, sliderTimer);
        }
      }
    }
  }, false);

}