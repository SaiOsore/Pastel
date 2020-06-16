import anime from 'animejs/lib/anime.es.js';

export const imgAnimation = (img, delay = 2500, reverse = false) => {
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

export const secondaryImgAnimation = (el, delay, reverse = false) => {
  timer(function() {
    if(reverse) {
      el.classList.remove('active');
    } else {
      el.classList.add('active');
    }
  }, delay);
}