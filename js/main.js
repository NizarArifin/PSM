/**
 * PSM Website - Main JavaScript
 * Handles navigation, animations, and interactive elements
 */

// ==================== Global Variables ====================
const STATE = {
  mobileMenuOpen: false,
  activeDropdown: null,
  scrollPosition: 0
};

// ==================== Utility Functions ====================

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element, offset = 0) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= offset
  );
}

// ==================== Navigation ====================

/**
 * Initialize navigation functionality
 */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  const dropdowns = document.querySelectorAll('.navbar-dropdown');
  
  // Mobile menu toggle
  if (mobileToggle && navbarMenu) {
    mobileToggle.addEventListener('click', () => {
      STATE.mobileMenuOpen = !STATE.mobileMenuOpen;
      mobileToggle.classList.toggle('active');
      navbarMenu.classList.toggle('active');
      document.body.style.overflow = STATE.mobileMenuOpen ? 'hidden' : '';
    });
  }
  
  // Dropdown functionality
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Close other dropdowns
        dropdowns.forEach(other => {
          if (other !== dropdown) {
            other.classList.remove('active');
          }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
        STATE.activeDropdown = dropdown.classList.contains('active') ? dropdown : null;
      });
    }
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (STATE.activeDropdown && !STATE.activeDropdown.contains(e.target)) {
      STATE.activeDropdown.classList.remove('active');
      STATE.activeDropdown = null;
    }
  });
  
  // Sticky navbar on scroll
  if (navbar) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', debounce(() => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.boxShadow = '';
      }
      
      lastScroll = currentScroll;
    }, 10));
  }
}

// ==================== Smooth Scroll ====================

/**
 * Initialize smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Don't scroll for # or javascript: links
      if (href === '#' || href.startsWith('javascript:')) {
        return;
      }
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (STATE.mobileMenuOpen) {
          const mobileToggle = document.querySelector('.mobile-menu-toggle');
          const navbarMenu = document.querySelector('.navbar-menu');
          
          if (mobileToggle && navbarMenu) {
            mobileToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            STATE.mobileMenuOpen = false;
            document.body.style.overflow = '';
          }
        }
        
        // Smooth scroll to target
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ==================== Scroll Animations ====================

/**
 * Initialize scroll-triggered animations
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.scroll-animate, .entrance-element');
  
  function checkAnimations() {
    animatedElements.forEach(element => {
      if (isInViewport(element, 100)) {
        if (element.classList.contains('scroll-animate')) {
          element.classList.add('animated');
        }
        if (element.classList.contains('entrance-element')) {
          element.classList.add('visible');
        }
      }
    });
  }
  
  // Initial check
  checkAnimations();
  
  // Check on scroll
  window.addEventListener('scroll', debounce(checkAnimations, 50));
}

// ==================== Back to Top Button ====================

/**
 * Initialize back to top button
 */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  
  if (backToTopBtn) {
    window.addEventListener('scroll', debounce(() => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, 100));
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ==================== Work Culture Accordion ====================

/**
 * Initialize work culture accordion functionality
 */
function initWorkCultureAccordion() {
  const workCultureCards = document.querySelectorAll('.work-culture-card');
  
  workCultureCards.forEach(card => {
    const header = card.querySelector('.work-culture-header');
    
    if (header) {
      header.addEventListener('click', () => {
        // Close other cards
        workCultureCards.forEach(otherCard => {
          if (otherCard !== card && otherCard.classList.contains('active')) {
            otherCard.classList.remove('active');
          }
        });
        
        // Toggle current card
        card.classList.toggle('active');
      });
    }
  });
}

// ==================== Form Validation ====================

/**
 * Initialize form validation
 */
function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = 'red';
          
          // Reset border color after 2 seconds
          setTimeout(() => {
            input.style.borderColor = '';
          }, 2000);
        }
      });
      
      if (isValid) {
        // Handle form submission
        console.log('Form is valid, submitting...');
        // You can add AJAX submission here
        
        // Show success message
        alert('Form submitted successfully!');
        form.reset();
      } else {
        alert('Please fill in all required fields.');
      }
    });
  });
}

// ==================== Lazy Loading Images ====================

/**
 * Initialize lazy loading for images
 */
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// ==================== Testimonials Carousel ====================

/**
 * Initialize testimonials carousel scroll functionality
 */
function initTestimonialsCarousel() {
  const carousel = document.querySelector('.testimonials-carousel');
  
  if (!carousel) return;
  
  let isDown = false;
  let startX;
  let scrollLeft;
  
  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.style.cursor = 'grabbing';
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });
  
  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
  });
  
  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
  });
  
  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });
  
  // Touch support
  let touchStartX = 0;
  let touchScrollLeft = 0;
  
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX - carousel.offsetLeft;
    touchScrollLeft = carousel.scrollLeft;
  });
  
  carousel.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - touchStartX) * 2;
    carousel.scrollLeft = touchScrollLeft - walk;
  });
}

// ==================== Video Modal ====================

/**
 * Initialize video modal functionality
 */
function initVideoModal() {
  const modal = document.getElementById('videoModal');
  if (!modal) return;
  
  const closeBtn = modal.querySelector('.video-modal-close');
  const videoTriggers = document.querySelectorAll('.video-trigger');
  
  // Open modal when clicking video triggers
  videoTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const videoId = trigger.getAttribute('data-video-id');
      openVideoModal(videoId);
    });
  });
  
  // Close modal when clicking close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeVideoModal);
  }
  
  // Close modal when clicking outside content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeVideoModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeVideoModal();
    }
  });
}

function openVideoModal(videoId) {
  const modal = document.getElementById('videoModal');
  if (!modal) return;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  console.log('Opening video modal for:', videoId);
  // Here you can load specific video based on videoId
  // Example: Load different YouTube/Vimeo embed based on videoId
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  if (!modal) return;
  
  modal.classList.remove('active');
  document.body.style.overflow = '';
  
  // Clear video content if needed
  // Example: Stop video playback
}

// ==================== Initialize All ====================

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
  console.log('PSM Website initialized');
  
  // Initialize all features
  initNavigation();
  initSmoothScroll();
  initScrollAnimations();
  initBackToTop();
  initWorkCultureAccordion();
  initFormValidation();
  initLazyLoading();
  initTestimonialsCarousel();
  initVideoModal();
}

// ==================== DOM Ready ====================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ==================== Window Load ====================

window.addEventListener('load', () => {
  // Remove loading class if exists
  document.body.classList.remove('loading');
  
  // Trigger initial animations
  const event = new Event('scroll');
  window.dispatchEvent(event);
});
