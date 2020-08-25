let time = new Date(),
    year = time.getFullYear();

const footerDate = document.querySelector('.footer__date');

if(footerDate) {
  footerDate.innerText = year;
}