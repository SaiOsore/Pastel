import { debounce, timer } from '../utils/helpers';
import { GLOBAL_DELAY } from '../utils/constants';
import { titleAnimation } from '../utils/letters';
import anime from 'animejs/lib/anime.es.js';

const homeContainer = document.querySelector('.home .container');
const homeTitles = document.querySelectorAll('.home__link span');
const homeSections = document.querySelectorAll('.home__section');
const homeTitleLetters = '.home__link .letter';

/*HOME ANIMATIONS FUNCTIONALITY*/
const imgAnimation = (img, delay = 2500, reverse = false) => {
  img.style.opacity = '0';
  img.transform = 'translate(-50%, 0%)';
  let imgAnimationBase;
  if(reverse) {
    imgAnimationBase = anime({
      targets: img,
      translateX: ['-50%', '-50%'],
      translateY: '-150%',
      opacity: '0',
      easing: 'easeOutElastic(1, .8)',
      duration: 100,
      delay: delay,
    });
  } else {
    imgAnimationBase = anime({
      targets: img,
      translateX: ['-50%', '-50%'],
      translateY: '-50%',
      opacity: '1',
      easing: 'easeOutElastic(1, .8)',
      duration: 100,
      delay: delay,
    });
  }
}

const secondaryImgAnimation = (el, delay, reverse = false) => {
  timer(function() {
    if(reverse) {
      el.classList.remove('active');
    } else {
      el.classList.add('active');
    }
  }, delay);
}

const HomeSectionAnimation = (reverse = false, activeName = '.home__section.active', element = '.home__img-container') => {
  const activeSection = document.querySelector(`${activeName}`);

  if(activeSection) {
    const mainImgContainers = activeSection.querySelectorAll(`${element}`);
    const mainImgContainer = mainImgContainers[0];
    const secondImgContainer = mainImgContainers[1];
    const thirdImgContainer = mainImgContainers[2];

    imgAnimation(mainImgContainer, 0, reverse);
    titleAnimation(1200, homeTitles, homeSections, homeTitleLetters, reverse);
  }
}

/*FIRST RENDER ANIMATION INITIAL*/
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
    HomeSectionAnimation(true);
    if(moved > 0) {
      timer(prevSlide, GLOBAL_DELAY);
    } else if(moved < 0) {
      timer(nextSlide, GLOBAL_DELAY);
    }
  });

  /*KEYS LISTENER*/
  window.addEventListener('keydown', (e) => {
    HomeSectionAnimation(true);
    if(e.keyCode == '38' || e.keyCode == '37') {
      timer(prevSlide, GLOBAL_DELAY);
    }
    if(e.keyCode == '40' || e.keyCode == '39') {
      timer(nextSlide, GLOBAL_DELAY);
    }
  });

  /*TOUCH LISTENER*/
  let initialPoint,
      finalPoint;

  homeContainer.addEventListener('touchstart', function(event) {
    event.preventDefault();
    event.stopPropagation();
    initialPoint = event.changedTouches[0];
  }, false);

  homeContainer.addEventListener('touchend', function(event) {
    event.preventDefault();
    event.stopPropagation();

    finalPoint=event.changedTouches[0];
    let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);

    if (xAbs > 20 || yAbs > 20) {
      if(xAbs > yAbs) {
        if (finalPoint.pageX < initialPoint.pageX) {
          /*SWIPE LEFT*/
          HomeSectionAnimation(true);
          timer(prevSlide, GLOBAL_DELAY);
        } else {
          /*SWIPE RIGHT*/
          HomeSectionAnimation(true);
          timer(nextSlide, GLOBAL_DELAY);
        }
      } else {
        if(finalPoint.pageY < initialPoint.pageY) {
          /*SWIPE UP*/
          HomeSectionAnimation(true);
          timer(prevSlide, GLOBAL_DELAY);
        } else {
          /*SWIPE DOWN*/
          HomeSectionAnimation(true);
          timer(nextSlide, GLOBAL_DELAY);
        }
      }
    }
  }, false);

}