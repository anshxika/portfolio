document.addEventListener('DOMContentLoaded', function () {
  // Typed.js Initialization
  const typed = new Typed('#typed', {
    strings: ["Web Developer", "Programmer", "Cybersecurity Enthusiast", "Java Developer", "Open Source Contributor", "Learner", "Tech Enthusiast"],
    typeSpeed: 150,
    backSpeed: 80,
    loop: true
  });

  // Initialize Swiper with cube effect
  const swiper = new Swiper('.mySwiper', {
    effect: "cube",
    allowTouchMove: false,  // Disable swipe gestures (manual navigation only)
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Enable pagination bullets if needed
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Function to navigate through swiper slides
  window.Navigate = function (index) {
    console.log("Navigating to slide index:", index); // Debug log

    // Navigate to the corresponding swiper slide with cube effect
    swiper.slideTo(index, 1000, true);

    // Update active sidebar link
    setActiveLink(index);
  }

  // Function to update the active sidebar link
  function setActiveLink(index) {
    const links = document.querySelectorAll('.links li');
    links.forEach((link, i) => {
      link.classList.toggle('activelink', i === index);  // Add/remove active class
    });
  }
});
