let menu = document.querySelector('.menu-bar');

let menuOffset = menu.offsetTop;
function stickMenu() {
  let scrollY = window.pageYOffset;
  

  if (scrollY >= menuOffset) {
    menu.classList.add('stick');
  }
  else {
    menu.classList.remove('stick');
  }
}

document.addEventListener('scroll', stickMenu);

