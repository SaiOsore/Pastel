import anime from 'animejs/lib/anime.es.js';
import waypoint from 'waypoints/lib/noframework.waypoints.min.js';
import { timer } from '../utils/helpers';

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

export const activeClassAnimation = (sections, delay = 1000, reverse = false, className = 'active') => {
  sections.forEach(section => {
    timer(function() {
      if(reverse) {
        section.classList.remove(className);
      } else {
        section.classList.add(className);
      }
    }, delay);
  });
}

export const sectionAnimation = (sections, offset='50%') => {
  sections.forEach(section => {
    const SectionsScroll = new Waypoint({
      element: section,
      handler: function() {
        const sectionTranslation = anime({
          targets: section,
          opacity: ['0', '1'],
          translateX: ['50%', '0%'],
          easing: 'linear',
          duration: 1100,
        });
        this.destroy()
      },
      offset: offset,
    });
  });
}

export const sectionOpacityAnimation = (sections, offset='50%') => {
  sections.forEach(section => {
    const SectionsScroll = new Waypoint({
      element: section,
      handler: function() {
        const sectionTranslation = anime({
          targets: section,
          opacity: ['0', '1'],
          easing: 'linear',
          duration: 1100,
        });
        this.destroy()
      },
      offset: offset,
    });
  });
}

export const opacityAnimation = (sections, duration=1500, offset='50%') => {
  sections.forEach(section => {
    const sectionTranslation = anime({
      targets: section,
      opacity: ['0', '1'],
      easing: 'linear',
      duration: duration,
    });
  });
}