import { sectionOpacityAnimation } from '../utils/animations';

const stylesSection = document.querySelectorAll('.styles__section');

if(stylesSection) {
  stylesSection.forEach((section) => {
    section.style.opacity = '0';
  });
  sectionOpacityAnimation(stylesSection);
}