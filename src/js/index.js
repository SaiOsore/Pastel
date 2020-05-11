// Main js file
// import './example.js'

import Menu from './components/Menu';
import FlyingImagesApp from './components/FlyingImagesApp';
import SpecialLetters from './components/SpecialLetters';
import Forms from './components/Forms';

const FlyingImagesContainer = document.querySelector('.FlyingImagesContainer');

const initFlyingImagesApp = (target) => {
  const app = new FlyingImagesApp(target);
}

if(FlyingImagesContainer) {
  initFlyingImagesApp(FlyingImagesContainer);
}
