// Function to toggle the navbar
function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }

  // Function to handle window resize event
  function handleResize() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const windowWidth = window.innerWidth;
  
    if (windowWidth > 600) {
      navbarToggle.style.display = 'none'; // Hide the navbar toggle on desktop
    } else {
      navbarToggle.style.display = 'block'; // Show the navbar toggle on mobile
    }
  }
  
  // Attach event listener for window resize event
  window.addEventListener('resize', handleResize);
  
  // Initial handling of window resize
  handleResize();
  

  // ....................................projects.................
// Function to toggle the navbar

// Rest of the code...
