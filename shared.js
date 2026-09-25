/* shared.js — injects nav + footer into every page */
(function(){
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  function isActive(page){ return currentPage === page ? 'active' : ''; }

  const navHTML = `
<nav class="navbar">
  <div class="navbar-inner">
    <a href="index.html" class="navbar-brand">
      <img src="logo.png" alt="Friends of the Badger Park logo">

    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html"  class="${isActive('index.html')}">Home</a></li>
      <li><a href="about.html"  class="${isActive('about.html')}">Our Achievements</a></li>
      <li><a href="events.html" class="${isActive('events.html')}">Events</a></li>
      <li><a href="news.html"   class="${isActive('news.html')}">News</a></li>
      <li><a href="gallery.html" class="${isActive('gallery.html')}">Gallery</a></li>
      <li><a href="contact.html" class="${isActive('contact.html')}">Contact</a></li>
      <li><a href="donate.html"  class="btn-donate ${isActive('donate.html')}">Donate ♥</a></li>
    </ul>
  </div>
</nav>`;

  const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="logo.png" alt="Friends of the Badger Park">
        <p>A volunteer community group formed in 2020 to replace and improve Badger Park for the whole community of Chesterfield.</p>
        <div class="footer-social">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Twitter">𝕏</a>
          <a href="#" aria-label="Instagram">▣</a>
        </div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="about.html">Our Achievements</a></li>
          <li><a href="events.html">Upcoming Events</a></li>
          <li><a href="news.html">Latest News</a></li>
          <li><a href="gallery.html">Photo Gallery</a></li>
          <li><a href="donate.html">Support Us</a></li>
          <li><a href="contact.html">Get in Touch</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact Us</h4>
        <p>📍 Badger Park, Chesterfield<br>Derbyshire</p>
        <p>📧 <a href="mailto:friendsofbadgerpark@gmail.com">friendsofbadgerpark@gmail.com</a></p>
        <p>Local volunteer community group serving Badger Park and the surrounding Chesterfield community.</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Friends of the Badger Park. All rights reserved.</span>
      <span>Designed with ♥ for our community</span>
    </div>
  </div>
</footer>`;

  // Inject navigation and footer consistently across all pages.
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Hamburger toggle
  document.getElementById('navToggle').addEventListener('click', function(){
    document.getElementById('navLinks').classList.toggle('open');
  });
})();

