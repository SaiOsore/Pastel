const tabNav = document.querySelectorAll('.home-main-nav__item'),
      tabContent = document.querySelectorAll('.home-main-preview__item');

let tabName;

function selectTabNav() {
  tabName = this.getAttribute('data-tab');
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