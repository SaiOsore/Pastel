const homeContainer = document.querySelector('.home .container');

if(homeContainer) {

  const homeSections = document.querySelectorAll('.home__section');

  const homeContainerHeight = homeSections[0].clientHeight;
  let length = 0;
  let prevLength;

  const prevSlide = (e) => {
    if(length === 0) {
      length = homeSections.length - 1;
      prevLength = 0;
    } else {
      length--;
      prevLength = length + 1;
    }
    homeSections[prevLength].classList.remove('active');
    homeSections[length].classList.add('active');
  }

  const nextSlide = (e) => {
    if(length === homeSections.length - 1) {
      length = 0;
      prevLength = homeSections.length - 1;
    } else {
      length++;
      prevLength = length - 1;
    }
    homeSections[prevLength].classList.remove('active');
    homeSections[length].classList.add('active');
  }

  homeContainer.addEventListener('wheel', (e) => {
    let moved = e.wheelDelta;
    if(moved > 0) {
      prevSlide();
    } else if(moved < 0) {
      nextSlide();
    }
  });

  window.addEventListener('keydown', (e) => {
    if(e.keyCode == '38' || e.keyCode == '37') {
      prevSlide();
    }
    if(e.keyCode == '40' || e.keyCode == '39') {
      nextSlide();
    }
  });

  homeContainer.addEventListener('touchend', (e) => {
    if(e.changedTouches[0].pageY < homeContainerHeight / 2) {
      prevSlide();
    } else {
      nextSlide();
    }
  });

  const autoplay = () => {
    setInterval(() => {
      nextSlide();
    }, 10000);
  }

}