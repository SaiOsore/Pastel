// Main js file
// import './example.js'

import Preloader from './components/Preloader';
import Menu from './components/Menu';
import FlyingImagesApp from './components/FlyingImagesApp';
import Text from './components/Text';
import Forms from './components/Forms';

const FlyingImagesContainer = document.querySelector('.FlyingImagesContainer');

const initFlyingImagesApp = (target) => {
  const app = new FlyingImagesApp(target);
}

if(FlyingImagesContainer) {
  initFlyingImagesApp(FlyingImagesContainer);
}
