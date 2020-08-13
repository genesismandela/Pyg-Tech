// Animation Burger
const menuBtn = document.querySelector('.nav-burger');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// Show and Hide Navigation Menu
document.querySelector('.nav-burger').addEventListener('click', function() {
  var x = document.querySelector('.nav-list');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
});

/*

const toggleColorMode = e => {
  if (e.currentTarget.classList.contains('light--hidden')) {
    document.documentElement.setAttribute('color-mode', 'light');

    localStorage.setItem('color-mode', 'light');
  }

  document.documentElement.setAttribute('color-mode', 'dark');

  localStorage.setItem('color-mode', 'dark');
};

const toggleColorButtons = document.querySelectorAll('.color-mode__light-bulb');

toggleColorButtons.forEach(btn => {
  btn.addEventListener('click', toggleColorMode);
});

*/