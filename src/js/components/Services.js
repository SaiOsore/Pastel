import { sectionAnimation } from '../utils/animations';

const sericesSection = document.querySelectorAll('.services__section');

if(sericesSection) {
  sericesSection.forEach((section) => {
    section.style.opacity = '0';
  });
  sectionAnimation(sericesSection);
}