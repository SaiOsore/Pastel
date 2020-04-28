// Main js file
// import './example.js'

import NavImg from './components/NavImg';
import FlyingImagesApp from './components/FlyingImagesApp';
import SpecialLetters from './components/SpecialLetters';

const FlyingImagesContainer = document.querySelector('.FlyingImagesContainer');

const initFlyingImagesApp = (target) => {
  const app = new FlyingImagesApp(target);
}

if(FlyingImagesContainer) {
  initFlyingImagesApp(FlyingImagesContainer);
}
