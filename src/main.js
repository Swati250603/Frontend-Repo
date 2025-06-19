// Navbar dropdown for mobile
const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');
if (dropbtn && dropdownContent) {
  dropbtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
  });
  document.addEventListener('click', () => {
    dropdownContent.style.display = 'none';
  });
}

// Placeholder handlers for Login and Contact Us
const loginBtn = document.querySelector('.login-btn');
const contactBtn = document.querySelector('.contact-btn');
// Remove the contactBtn event listener for 'coming soon' alert
// if (contactBtn) {
//   contactBtn.addEventListener('click', () => {
//     alert('Contact form coming soon!');
//   });
// }

// Page loader for homepage (show only on first visit in session)
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    if (sessionStorage.getItem('loaderShown')) {
      loader.classList.add('hide');
    } else {
      setTimeout(() => loader.classList.add('hide'), 2500);
      sessionStorage.setItem('loaderShown', 'true');
    }
  }
});

// Hamburger menu for mobile nav (mobile only)
const hamburger = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobileNav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileNav.classList.toggle('open');
  });
  // Close menu when clicking a link
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('open') && !mobileNav.contains(e.target) && e.target !== hamburger) {
      mobileNav.classList.remove('open');
    }
  });
} 