/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Menu hidden
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-top');
  // When the scroll is higher than 400 viewport height, add the show-scroll class
  if (this.scrollY >= 400) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL TO TOP ===============*/
const scrollTop = document.getElementById('scroll-top');

if (scrollTop) {
  scrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/*=============== SMOOTH SCROLL FOR ANCHOR LINKS ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Don't prevent default for links that just have "#"
    if (href === '#') {
      return;
    }

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      const headerHeight = document.getElementById('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
function reveal() {
  const reveals = document.querySelectorAll('.about__feature, .service__card, .equipment__card, .portfolio__item');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('animate-on-scroll');
    }
  }
}

window.addEventListener('scroll', reveal);

// Initial check for elements already in viewport
reveal();

/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const sectionLink = document.querySelector('.nav__link[href*=' + sectionId + ']');

    if (sectionLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionLink.classList.add('active-link');
      } else {
        sectionLink.classList.remove('active-link');
      }
    }
  });
}

window.addEventListener('scroll', scrollActive);

/*=============== LAZY LOADING IMAGES ===============*/
const images = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Image will be loaded automatically by the browser
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

/*=============== PERFORMANCE: Debounce scroll events ===============*/
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(scrollActive));
window.addEventListener('scroll', debounce(reveal));

/*=============== EQUIPMENT CAROUSEL ===============*/
class Carousel {
  constructor(carouselId, prevBtnId, nextBtnId, indicatorsId) {
    this.carousel = document.getElementById(carouselId);
    this.track = this.carousel?.querySelector('.equipment__carousel-track');
    this.prevBtn = document.getElementById(prevBtnId);
    this.nextBtn = document.getElementById(nextBtnId);
    this.indicatorsContainer = document.getElementById(indicatorsId);

    if (!this.carousel || !this.track) return;

    this.cards = Array.from(this.track.children);
    this.currentIndex = 0;
    this.itemsPerView = this.getItemsPerView();
    this.totalSlides = Math.ceil(this.cards.length / this.itemsPerView);

    this.init();
  }

  init() {
    this.createIndicators();
    this.updateCarousel();
    this.attachEvents();

    // Update on window resize
    window.addEventListener('resize', debounce(() => {
      this.itemsPerView = this.getItemsPerView();
      this.totalSlides = Math.ceil(this.cards.length / this.itemsPerView);
      this.currentIndex = Math.min(this.currentIndex, this.totalSlides - 1);
      this.updateCarousel();
      this.createIndicators();
    }, 250));
  }

  getItemsPerView() {
    const width = window.innerWidth;
    if (width < 576) return 1;
    if (width < 992) return 2;
    return 3;
  }

  createIndicators() {
    if (!this.indicatorsContainer) return;

    this.indicatorsContainer.innerHTML = '';

    for (let i = 0; i < this.totalSlides; i++) {
      const indicator = document.createElement('button');
      indicator.classList.add('carousel__indicator');
      indicator.setAttribute('aria-label', `Ir para slide ${i + 1}`);

      if (i === this.currentIndex) {
        indicator.classList.add('active');
      }

      indicator.addEventListener('click', () => {
        this.currentIndex = i;
        this.updateCarousel();
      });

      this.indicatorsContainer.appendChild(indicator);
    }
  }

  updateCarousel() {
    const cardWidth = this.cards[0].offsetWidth;
    const gap = 24; // 1.5rem in pixels
    const offset = -(this.currentIndex * (cardWidth + gap) * this.itemsPerView);

    this.track.style.transform = `translateX(${offset}px)`;

    // Update buttons state
    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentIndex === 0;
    }

    if (this.nextBtn) {
      this.nextBtn.disabled = this.currentIndex >= this.totalSlides - 1;
    }

    // Update indicators
    const indicators = this.indicatorsContainer?.querySelectorAll('.carousel__indicator');
    indicators?.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentIndex);
    });
  }

  next() {
    if (this.currentIndex < this.totalSlides - 1) {
      this.currentIndex++;
      this.updateCarousel();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    }
  }

  attachEvents() {
    this.prevBtn?.addEventListener('click', () => this.prev());
    this.nextBtn?.addEventListener('click', () => this.next());

    // Keyboard navigation
    this.carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prev();
      } else if (e.key === 'ArrowRight') {
        this.next();
      }
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    this.carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    this.carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    });

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    };

    this.handleSwipe = handleSwipe;
  }
}

// Initialize equipment carousel
document.addEventListener('DOMContentLoaded', () => {
  new Carousel('equipment-carousel', 'equipment-prev', 'equipment-next', 'equipment-indicators');
});

/*=============== FORM VALIDATION (if needed) ===============*/
// You can add form validation here if you create a contact form

/*=============== WHATSAPP LINK ===============*/
// The WhatsApp link is already configured in the HTML with the correct format
// Example: https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento

/*=============== ACCESSIBILITY IMPROVEMENTS ===============*/
// Trap focus in mobile menu when open
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

navToggle?.addEventListener('click', () => {
  const firstFocusableElement = navMenu.querySelectorAll(focusableElements)[0];
  firstFocusableElement?.focus();
});

// ESC key to close mobile menu
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
    navMenu.classList.remove('show-menu');
    navToggle?.focus();
  }
});

/*=============== PRELOAD CRITICAL RESOURCES ===============*/
// This ensures fonts and critical CSS are loaded as quickly as possible
// Already handled in HTML with preconnect and font-display: swap

/*=============== CONSOLE INFO ===============*/
console.log('%c🎨 Gráfica Premium - Landing Page', 'color: #FF9F43; font-size: 20px; font-weight: bold;');
console.log('%cDesenvolvido com foco em performance, acessibilidade e SEO', 'color: #3B5998; font-size: 12px;');

/*=============== ANALYTICS (Optional) ===============*/
// You can add Google Analytics, Facebook Pixel, or other tracking scripts here
// Make sure to follow LGPD (Brazilian Data Protection Law) requirements

// Example for Google Analytics:
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_MEASUREMENT_ID');
