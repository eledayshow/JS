game = document.querySelector('.example')
h1 = document.querySelector('.headerh1');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop !== 0) {
    game.classList.add('anim');
    game.classList.remove('animBack');
  } else {
    setTimeout(() => {
      if (document.documentElement.scrollTop === 0) {
        game.classList.add('animBack');
        game.classList.remove('anim');
      }
    }, 1000)
  }
});

h1.addEventListener('click', () => {
  h1.classList.add('html');
})