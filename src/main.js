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