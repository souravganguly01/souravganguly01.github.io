// Add 'active' class to the current page link in the nav
(function(){
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const target = a.getAttribute('href');
    if ((here === '' && target === 'index.html') || target === here) {
      a.classList.add('active');
    }
    // Also treat root as index.html
    if (here === '' && target === 'index.html') a.classList.add('active');
  });
})();
