const tabNav = document.querySelectorAll('.menu-nav__item'),
      tabContent = document.querySelectorAll('.menu-nav-preview__item');

function selectTabNav() {
  const tabName = this.getAttribute('data-tab');
  selectTabContent(tabName);
}

function selectTabContent(tab) {
  tabContent.forEach((item) => {
    if(item.dataset.tab === tab) {
      item.style.visibility = 'visible';
    } else {
      item.style.visibility = 'hidden';
    }
  });
}

function deselectTabContent() {
  tabContent.forEach((item) => {
    item.style.visibility = 'hidden';
  });
}

tabNav.forEach((item) => {
  item.addEventListener('mouseover', selectTabNav);
  item.addEventListener('click', selectTabNav);
  //item.addEventListener('mouseout', deselectTabContent);
});


const toggleActive = (element, className) => {
  element.classList.toggle(className);
}

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const body = document.body;

menuBtn.addEventListener('click', function() {
  toggleActive(menu, 'active');
  toggleActive(menuBtn, 'active');
  toggleActive(document.body, 'body-fixed');
  if(this.classList.contains('active')) {
    this.innerText = 'ЗАКРЫТЬ';
    body.dataset.theme = 'all-white';
  } else {
    this.innerText = 'МЕНЮ';
    body.dataset.theme = '';
  }
});