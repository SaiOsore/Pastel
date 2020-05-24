const WEIGHTS = [500, 700, 900];
const MAX_ROTATE = 5;
const MAX_SCALE = 1;
const MIN_SCALE = 0.7;
const RANDOM = false;

const el = document.querySelectorAll('.about__text span');
const spans = [];

const convertToSpans = () => {
  el.forEach((block) => {
    const text = block.innerText;
    const words = text.split(' ');
    block.innerHTML = '';

    words.forEach((word) => {
      const letters = word.split('').filter(letter => !!letter.trim().length)
      const wordSpan = document.createElement('span')
      letters.forEach((letter) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.innerText = letter;
        wordSpan.appendChild(span);
        wordSpan.className = 'word';
        spans.push(span);
      })
      block.append(wordSpan, ' ');
      block.className = 'text-block';
    })
  })
}

const SpecialLetters = () => {
  const scaleDiff = MAX_SCALE - MIN_SCALE;
  spans.forEach((span) => {
    const rotate = MAX_ROTATE * (Math.random() - Math.random());
    const scale = MIN_SCALE + (scaleDiff * Math.random());
    if(RANDOM) {
      span.style.fontWeight = WEIGHTS[Math.floor(WEIGHTS.length * Math.random())];
    }
    span.style.transform = `rotate(${rotate}deg) scale(${scale})`;
  })
}

if(el) {
  convertToSpans();
  SpecialLetters();
}
