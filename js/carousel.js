/**
 * PSM Website - Carousel Component
 * Handles article carousel functionality
 */

class Carousel {
  constructor(element, options = {}) {
    this.carousel = element;
    this.options = {
      autoplay: options.autoplay || false,
      autoplaySpeed: options.autoplaySpeed || 5000,
      itemsToShow: options.itemsToShow || 4,
      itemsToScroll: options.itemsToScroll || 1,
      gap: options.gap || 10,
      responsive: options.responsive || [],
      loop: options.loop !== undefined ? options.loop : true
    };
    
    this.currentIndex = 0;
    this.wrapper = null;
    this.items = [];
    this.isDragging = false;
    this.startPos = 0;
    this.currentTranslate = 0;
    this.prevTranslate = 0;
    this.animationID = null;
    this.autoplayInterval = null;
    
    this.init();
  }
  
  init() {
    this.wrapper = this.carousel.querySelector('.carousel-wrapper');
    this.items = Array.from(this.carousel.querySelectorAll('.carousel-item'));
    
    if (!this.wrapper || this.items.length === 0) {
      console.warn('Carousel: No wrapper or items found');
      return;
    }
    
    this.setupResponsive();
    this.setupEventListeners();
    this.updateCarousel();
    
    if (this.options.autoplay) {
      this.startAutoplay();
    }
  }
  
  setupResponsive() {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      let itemsToShow = this.options.itemsToShow;
      
      // Default responsive breakpoints
      if (width < 768) {
        itemsToShow = 1;
      } else if (width < 1024) {
        itemsToShow = 2;
      } else if (width < 1440) {
        itemsToShow = 3;
      }
      
      // Custom responsive settings
      this.options.responsive.forEach(breakpoint => {
        if (width <= breakpoint.breakpoint) {
          itemsToShow = breakpoint.settings.itemsToShow;
        }
      });
      
      this.currentItemsToShow = itemsToShow;
    };
    
    updateItemsToShow();
    
    window.addEventListener('resize', () => {
      updateItemsToShow();
      this.updateCarousel();
    });
  }
  
  setupEventListeners() {
    // Mouse events
    this.wrapper.addEventListener('mousedown', this.onDragStart.bind(this));
    this.wrapper.addEventListener('mousemove', this.onDragMove.bind(this));
    this.wrapper.addEventListener('mouseup', this.onDragEnd.bind(this));
    this.wrapper.addEventListener('mouseleave', this.onDragEnd.bind(this));
    
    // Touch events
    this.wrapper.addEventListener('touchstart', this.onDragStart.bind(this));
    this.wrapper.addEventListener('touchmove', this.onDragMove.bind(this));
    this.wrapper.addEventListener('touchend', this.onDragEnd.bind(this));
    
    // Prevent context menu on long press
    this.wrapper.addEventListener('contextmenu', (e) => {
      if (this.isDragging) {
        e.preventDefault();
      }
    });
    
    // Stop autoplay on hover
    this.carousel.addEventListener('mouseenter', () => {
      if (this.options.autoplay) {
        this.stopAutoplay();
      }
    });
    
    this.carousel.addEventListener('mouseleave', () => {
      if (this.options.autoplay) {
        this.startAutoplay();
      }
    });
  }
  
  onDragStart(e) {
    this.isDragging = true;
    this.startPos = this.getPositionX(e);
    this.animationID = requestAnimationFrame(this.animation.bind(this));
    this.wrapper.style.cursor = 'grabbing';
  }
  
  onDragMove(e) {
    if (!this.isDragging) return;
    
    const currentPosition = this.getPositionX(e);
    this.currentTranslate = this.prevTranslate + currentPosition - this.startPos;
  }
  
  onDragEnd() {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    cancelAnimationFrame(this.animationID);
    
    const movedBy = this.currentTranslate - this.prevTranslate;
    
    // If moved enough, go to next/prev slide
    if (movedBy < -100 && this.currentIndex < this.getMaxIndex()) {
      this.currentIndex += 1;
    }
    
    if (movedBy > 100 && this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
    
    this.updateCarousel();
    this.wrapper.style.cursor = 'grab';
  }
  
  getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  }
  
  animation() {
    this.setSliderPosition();
    if (this.isDragging) {
      requestAnimationFrame(this.animation.bind(this));
    }
  }
  
  setSliderPosition() {
    this.wrapper.style.transform = `translateX(${this.currentTranslate}px)`;
  }
  
  updateCarousel() {
    const itemWidth = this.items[0]?.offsetWidth || 0;
    const gap = this.options.gap;
    const offset = (itemWidth + gap) * this.currentIndex;
    
    this.currentTranslate = -offset;
    this.prevTranslate = this.currentTranslate;
    this.setSliderPosition();
    
    this.updateDots();
  }
  
  getMaxIndex() {
    return Math.max(0, this.items.length - this.currentItemsToShow);
  }
  
  next() {
    if (this.currentIndex < this.getMaxIndex()) {
      this.currentIndex += this.options.itemsToScroll;
    } else if (this.options.loop) {
      this.currentIndex = 0;
    }
    this.updateCarousel();
  }
  
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.options.itemsToScroll;
    } else if (this.options.loop) {
      this.currentIndex = this.getMaxIndex();
    }
    this.updateCarousel();
  }
  
  goTo(index) {
    this.currentIndex = Math.max(0, Math.min(index, this.getMaxIndex()));
    this.updateCarousel();
  }
  
  startAutoplay() {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, this.options.autoplaySpeed);
  }
  
  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
  
  updateDots() {
    const dotsContainer = this.carousel.querySelector('.carousel-dots');
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = '';
    
    const totalDots = Math.ceil(this.items.length / this.currentItemsToShow);
    const currentDot = Math.floor(this.currentIndex / this.currentItemsToShow);
    
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      
      if (i === currentDot) {
        dot.classList.add('active');
      }
      
      dot.addEventListener('click', () => {
        this.goTo(i * this.currentItemsToShow);
      });
      
      dotsContainer.appendChild(dot);
    }
  }
  
  destroy() {
    this.stopAutoplay();
    // Remove event listeners and reset styles
    this.wrapper.style.transform = '';
    this.wrapper.style.cursor = '';
  }
}

// Initialize carousels when DOM is ready
function initCarousels() {
  // Article Carousel
  const articleCarousels = document.querySelectorAll('.article-carousel');
  articleCarousels.forEach(carousel => {
    new Carousel(carousel, {
      autoplay: true,
      autoplaySpeed: 5000,
      itemsToShow: 4,
      itemsToScroll: 1,
      gap: 10,
      loop: true
    });
  });
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarousels);
} else {
  initCarousels();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Carousel;
}
