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
      <li><a href="index.html" class="${isActive('index.html')}">Home</a></li>
      <li><a href="about.html" class="${isActive('about.html')}">Our Achievements</a></li>
      <li><a href="events.html" class="${isActive('events.html')}">Events</a></li>
      <li><a href="news.html" class="${isActive('news.html')}">News</a></li>
      <li><a href="contact.html" class="${isActive('contact.html')}">Contact</a></li>
      <li class="nav-social"><a href="#" aria-label="Facebook"><svg class="social-icon social-facebook" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.7.3-1 1-1z"/></svg><span class="sr-only">Facebook</span></a></li>
      <li class="nav-social"><a href="#" aria-label="Instagram"><svg class="social-icon social-instagram" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor"/></svg><span class="sr-only">Instagram</span></a></li>
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
          <a href="#" class="footer-social-link" aria-label="Facebook"><svg class="social-icon social-facebook" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.7.3-1 1-1z"/></svg><span class="sr-only">Facebook</span></a>
          <a href="#" class="footer-social-link" aria-label="Instagram"><svg class="social-icon social-instagram" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor"/></svg><span class="sr-only">Instagram</span></a>
        </div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="about.html">Our Achievements</a></li>
          <li><a href="events.html">Upcoming Events</a></li>
          <li><a href="news.html">Newsletters</a></li>
          <li><a href="contact.html">Get in Touch</a></li>
          <li><a href="#" class="footer-social-link" aria-label="Facebook"><svg class="social-icon social-facebook" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.7.3-1 1-1z"/></svg><span class="sr-only">Facebook</span></a></li>
          <li><a href="#" class="footer-social-link" aria-label="Instagram"><svg class="social-icon social-instagram" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor"/></svg><span class="sr-only">Instagram</span></a></li>
        </ul>
      </div>
      <div>
        <h4>Contact Us</h4>
        <p>📍 Badger Park, Chesterfield<br>Derbyshire</p>
        <p>📧 <a href="mailto:friendsofbadgerpark@gmail.com">friendsofbadgerpark@gmail.com</a></p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Friends of the Badger Park. All rights reserved.</span>
      <span>Designed with ♥ for our community</span>
    </div>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  const toggle=document.getElementById('navToggle');
  if(toggle) toggle.addEventListener('click', function(){
    document.getElementById('navLinks').classList.toggle('open');
  });
})();
