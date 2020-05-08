export function selectTabNav(item, tabContent) {
  const tabName = item.getAttribute('data-tab');
  selectTabContent(tabName, tabContent);
}

export function selectTabContent(tab, tabContent) {
  tabContent.forEach((item) => {
    if(item.dataset.tab === tab) {
      item.style.visibility = 'visible';
    } else {
      item.style.visibility = 'hidden';
    }
  });
}

export function deselectTabContent(tabContent) {
  tabContent.forEach((item) => {
    item.style.visibility = 'hidden';
  });
}