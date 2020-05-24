const WEIGHTS = [500, 700, 900];
const MAX_ROTATE = 5;
const MAX_SCALE = 1;
const MIN_SCALE = 0.7;
const RANDOM = false;

export const SpecialLetters = (arr) => {
  const scaleDiff = MAX_SCALE - MIN_SCALE;
  arr.forEach((span) => {
    const rotate = MAX_ROTATE * (Math.random() - Math.random());
    const scale = MIN_SCALE + (scaleDiff * Math.random());
    if(RANDOM) {
      span.style.fontWeight = WEIGHTS[Math.floor(WEIGHTS.length * Math.random())];
    }
    span.style.transform = `rotate(${rotate}deg) scale(${scale})`;
  })
}
