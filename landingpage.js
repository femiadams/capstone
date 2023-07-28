function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
