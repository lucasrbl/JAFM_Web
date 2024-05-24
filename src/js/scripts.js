/* Template: Blink SaaS App Website Bootstrap HTML Template
   Description: Custom JS file
*/

document.addEventListener('DOMContentLoaded', function() {
  "use strict";

  /* Navbar Scripts */
  // Collapse the navbar on scroll
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (navbar && window.scrollY > 60) {
      navbar.classList.add('top-nav-collapse');
    } else if (navbar) {
      navbar.classList.remove('top-nav-collapse');
    }
  });

  // Page scrolling feature
  var pageScrollLinks = document.querySelectorAll('a.page-scroll');
  if (pageScrollLinks) {
    pageScrollLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Offcanvas script from Bootstrap
  var offcanvasToggle = document.querySelectorAll('[data-toggle="offcanvas"]');
  if (offcanvasToggle) {
    offcanvasToggle.forEach(function(toggle) {
      toggle.addEventListener('click', function() {
        document.querySelector('.offcanvas-collapse').classList.toggle('open');
      });
    });
  }

  // Dropdown hover in desktop mode
  var dropdowns = document.querySelectorAll('.dropdown');
  if (dropdowns) {
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('mouseenter', function() {
        this.classList.add('show');
        this.querySelector('.dropdown-menu').classList.add('show');
      });
      dropdown.addEventListener('mouseleave', function() {
        this.classList.remove('show');
        this.querySelector('.dropdown-menu').classList.remove('show');
      });
    });
  }

  /* Details Lightbox - Magnific Popup */
  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  /* Image Slider - Swiper */
  var imageSlider = new Swiper('.image-slider', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    loop: true,
    spaceBetween: 50,
    slidesPerView: 5,
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });

  /* Card Slider - Swiper */
  var cardSlider = new Swiper('.card-slider', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
      991: {
        slidesPerView: 1
      }
    }
  });

  /* Counter - CountTo */
  var counters = document.querySelectorAll('.counter-value');
  var a = 0;
  window.addEventListener('scroll', function() {
    if (a === 0 && window.scrollY > (document.getElementById('counter').offsetTop - window.innerHeight)) {
      counters.forEach(function(counter) {
        var countTo = parseInt(counter.getAttribute('data-count'));
        var countNum = parseInt(counter.innerText);
        var interval = setInterval(function() {
          if (countNum < countTo) {
            countNum++;
            counter.innerText = countNum;
          } else {
            clearInterval(interval);
          }
        }, 30);
      });
      a = 1;
    }
  });

  /* Move Form Fields Label When User Types */
  var inputFields = document.querySelectorAll('input, textarea');
  inputFields.forEach(function(input) {
    input.addEventListener('keyup', function() {
      if (this.value !== '') {
        this.classList.add('notEmpty');
      } else {
        this.classList.remove('notEmpty');
      }
    });
  });

  /* Back To Top Button */
  var backToTopButton = document.createElement('a');
  backToTopButton.href = 'body';
  backToTopButton.className = 'back-to-top page-scroll';
  backToTopButton.innerText = 'Back to Top';
  document.body.prepend(backToTopButton);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 700) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  /* Removes Long Focus On Buttons */
  var buttons = document.querySelectorAll('.button, a, button');
  buttons.forEach(function(btn) {
    btn.addEventListener('mouseup', function() {
      this.blur();
    });
  });

});
