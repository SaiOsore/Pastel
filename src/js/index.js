// Main js file
// import './example.js'

import Preloader from './components/Preloader';
import Menu from './components/Menu';
import HomeSlider from './components/HomeSlider';
import FlyingImagesApp from './components/FlyingImagesApp';
import Text from './components/Text';
import Forms from './components/Forms';


/*INITIALIZATIONS OF FLYING IMAGES APP*/

const initFlyingImagesApp = (target) => {
  const app = new FlyingImagesApp(target);
}

const FlyingImagesContainer = document.querySelector('.FlyingImagesContainer');

if(FlyingImagesContainer) {
  initFlyingImagesApp(FlyingImagesContainer);
}
