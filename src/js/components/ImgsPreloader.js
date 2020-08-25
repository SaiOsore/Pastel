import { showImg } from '../utils/helpers';

/*changes src of all images to data-src when visible*/
showImg();
window.addEventListener('scroll', showImg);