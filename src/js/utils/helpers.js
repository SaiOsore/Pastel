export default function shuffle(a) {
  for(let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function preloadImgs(url) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('Error loading image'))
    img.src = url
  })
}

export const toggleActive = (element, className) => {
  element.classList.toggle(className);
}

export const convertToSpans = (el, arr) => {
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
        arr.push(span);
      })
      block.append(wordSpan, ' ');
      block.className = 'text-block';
    })
  })
}