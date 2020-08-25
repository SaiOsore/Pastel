export function debounce(f, ms) {
  let isCooldown = false;
  return function() {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
}

export const timer = (callback, ms, ...args) => {
  setTimeout(() => {
    callback(...args);
  }, ms);
}

export function shuffle(a) {
  for(let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a;
}

export function preloadImgs(url) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Error loading image'));
    img.src = url;
  })
}

export const toggleClassName = (element, className) => {
  element.classList.toggle(className);
}

export const convertToSpans = (el, arr = []) => {
  el.forEach((block) => {
    const text = block.innerText;
    const words = text.split(' ');
    block.innerHTML = '';

    words.forEach((word) => {
      const letters = word.split('').filter(letter => !!letter.trim().length);
      const wordSpan = document.createElement('span');
      letters.forEach((letter) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.innerText = letter;
        wordSpan.appendChild(span);
        wordSpan.className = 'word';
        arr.push(span);
      })
      block.append(wordSpan, ' ');
    })

    const isClassName = block.classList.contains('text-block');
    if(!isClassName) {
      block.className += ' text-block';
    }
  })
}

export const isVisible = (elem) => {

  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

export const showImg = () => {
  for(let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if(isVisible(img)) {
      console.log('visible');
      img.src = realSrc;
      img.dataset.src = '';
    }
  }
}