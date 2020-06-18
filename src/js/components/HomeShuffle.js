import { shuffle } from '../utils/helpers';

const imgsArr = [
  '../assets/img/home/1.jpg',
  '../assets/img/home/2.jpg',
  '../assets/img/home/3.jpg',
  '../assets/img/home/4.jpg',
  '../assets/img/home/5.jpg',
  '../assets/img/home/6.jpg',
  '../assets/img/home/7.jpg',
  '../assets/img/home/8.jpg',
];

const img = document.querySelector('.home__img');
const shuffleImgs = shuffle(imgsArr);
const imgSrc = shuffleImgs[0];

if(img) {
  img.src = imgSrc;
}