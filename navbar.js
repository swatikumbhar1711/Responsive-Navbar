const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

searchIcon.addEventListener('click', () => {
  searchInput.classList.toggle('active');
  searchInput.focus();
});
