import { sectionAnimation } from '../utils/animations';

const packagesText = document.querySelectorAll('.packages__descr');

if(packagesText) {
  packagesText.forEach((section) => {
    section.style.opacity = '0';
  });
  sectionAnimation(packagesText, '90%');
}