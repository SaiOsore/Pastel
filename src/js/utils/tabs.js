export function selectTabNav(item, tabContent) {
  const tabName = item.getAttribute('data-tab');
  selectTabContent(tabName, tabContent);
}

export function selectTabContent(tab, tabContent) {
  tabContent.forEach((item) => {
    if(item.dataset.tab === tab) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

export function deselectTabContent(tabContent) {
  tabContent.forEach((item) => {
    item.classList.remove('active');
  });
}

/*RADIO BUTTONS*/
export function selectRadioButtons(input, container) {
  if(input.type == "radio" && input.checked) {
    container.classList.add('active');
  } else {
    container.classList.remove('active');
  }
}

export function deselectRadioButtons(inputs) {
  inputs.forEach((input) => {
    input.checked = false;
  });
}