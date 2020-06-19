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

const quotesArr = [
  {
    descr: 'Любовь должна быть романтической. В противном случае лучше ходить в спортивный зал.',
    author: 'Ирвин Шоу',
  },
  {
    descr: 'Люди нуждаются в романтике.',
    author: 'Мишель Мерсье',
  },
  {
    descr: 'В наш деловой век нужно уметь быть романтиком.',
    author: 'Эрих Мария Ремарк',
  },
  {
    descr: 'Люди, по-настоящему романтические, воздвигают хорошо защищённую крепость на скрытых вершинах своей собственной души.',
    author: 'Андре Моруа',
  },
  {
    descr: 'Только в минуты свидания и разлуки люди знают, сколько любви таило их сердце.',
    author: 'Жан Поль Рихтер',
  },
  {
    descr: 'Если девушка приходит на свидание красивая — кто будет расстраиваться, что она опоздала? Никто!',
    author: 'Джером Сэлинджер',
  },
];

const quoteContainer = document.querySelector('.home__descr--quote');
const shuffleQuotes = shuffle(quotesArr);
const quote = shuffleQuotes[0];

if(quoteContainer) {
  quoteContainer.innerHTML = `
    <span>"${quote.descr}"</span>
    <br /> <br />
    <span>${quote.author}</span>
  `;
}