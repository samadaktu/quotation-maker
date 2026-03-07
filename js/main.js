// ILM SEEKER - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.navbar-links');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      this.classList.toggle('active');
    });
  }

  // Cart Badge Animation
  const cartBadge = document.querySelector('.cart-badge');

  function animateCartBadge() {
    if (cartBadge) {
      cartBadge.classList.add('pulse');
      setTimeout(() => {
        cartBadge.classList.remove('pulse');
      }, 500);
    }
  }

  // Add to Cart Functionality
  const addToCartButtons = document.querySelectorAll('[class*="btn"]');

  addToCartButtons.forEach(button => {
    if (button.textContent.includes('Purchase') || button.textContent.includes('Add to Cart')) {
      button.addEventListener('click', function(e) {
        if (!this.closest('a')) {
          e.preventDefault();
          animateCartBadge();

          // Show success message (optional)
          showNotification('Item added to cart!');
        }
      });
    }
  });

  // Notification System
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: var(--primary-green);
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Filter Pills (for courses page)
  const filterPills = document.querySelectorAll('.filter-pill');

  filterPills.forEach(pill => {
    pill.addEventListener('click', function() {
      filterPills.forEach(p => p.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');
      filterCourses(filter);
    });
  });

  function filterCourses(filter) {
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
        card.style.animation = 'fadeInUp 0.5s ease';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Accordion (for course modules)
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isActive = this.classList.contains('active');

      // Close all accordions
      accordionHeaders.forEach(h => {
        h.classList.remove('active');
        h.nextElementSibling.style.maxHeight = null;
      });

      // Open clicked accordion if it wasn't active
      if (!isActive) {
        this.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // Image Gallery (for product pages)
  const thumbnails = document.querySelectorAll('.product-thumbnail');
  const mainImage = document.querySelector('.product-main-image');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
      thumbnails.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      if (mainImage) {
        mainImage.src = this.src;
        mainImage.style.animation = 'fadeIn 0.3s ease';
      }
    });
  });

  // Quantity Controls
  const quantityDecrease = document.querySelectorAll('.quantity-decrease');
  const quantityIncrease = document.querySelectorAll('.quantity-increase');

  quantityDecrease.forEach(btn => {
    btn.addEventListener('click', function() {
      const input = this.nextElementSibling;
      const currentValue = parseInt(input.value);
      if (currentValue > 1) {
        input.value = currentValue - 1;
      }
    });
  });

  quantityIncrease.forEach(btn => {
    btn.addEventListener('click', function() {
      const input = this.previousElementSibling;
      const currentValue = parseInt(input.value);
      const max = parseInt(input.max) || 99;
      if (currentValue < max) {
        input.value = currentValue + 1;
      }
    });
  });

  // Star Rating Hover Effect
  const starContainers = document.querySelectorAll('.star-rating-interactive');

  starContainers.forEach(container => {
    const stars = container.querySelectorAll('.star');

    stars.forEach((star, index) => {
      star.addEventListener('mouseenter', function() {
        stars.forEach((s, i) => {
          if (i <= index) {
            s.classList.add('star-filled');
            s.classList.remove('star-empty');
          } else {
            s.classList.remove('star-filled');
            s.classList.add('star-empty');
          }
        });
      });

      star.addEventListener('click', function() {
        container.dataset.rating = index + 1;
      });
    });

    container.addEventListener('mouseleave', function() {
      const rating = parseInt(this.dataset.rating) || 0;
      stars.forEach((s, i) => {
        if (i < rating) {
          s.classList.add('star-filled');
          s.classList.remove('star-empty');
        } else {
          s.classList.remove('star-filled');
          s.classList.add('star-empty');
        }
      });
    });
  });

  // Form Validation
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const inputs = this.querySelectorAll('input[required], textarea[required]');
      let isValid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#EF4444';
          setTimeout(() => {
            input.style.borderColor = '';
          }, 2000);
        }
      });

      if (isValid) {
        showNotification('Form submitted successfully!');
        this.reset();
      } else {
        showNotification('Please fill in all required fields.');
      }
    });
  });

  // Pagination
  const paginationPrev = document.querySelectorAll('.pagination-prev');
  const paginationNext = document.querySelectorAll('.pagination-next');

  paginationPrev.forEach(btn => {
    btn.addEventListener('click', function() {
      const pageNum = document.querySelector('.page-number');
      if (pageNum) {
        const current = parseInt(pageNum.textContent.split('/')[0]);
        if (current > 1) {
          pageNum.textContent = `${current - 1}/${pageNum.textContent.split('/')[1]}`;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });

  paginationNext.forEach(btn => {
    btn.addEventListener('click', function() {
      const pageNum = document.querySelector('.page-number');
      if (pageNum) {
        const current = parseInt(pageNum.textContent.split('/')[0]);
        const total = parseInt(pageNum.textContent.split('/')[1]);
        if (current < total) {
          pageNum.textContent = `${current + 1}/${total}`;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });

  // Lazy Loading for Images
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

  // Scroll to Top Button
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.className = 'scroll-top-btn';
  scrollTopBtn.innerHTML = '↑';
  scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-green);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;

  document.body.appendChild(scrollTopBtn);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopBtn.style.opacity = '1';
      scrollTopBtn.style.visibility = 'visible';
    } else {
      scrollTopBtn.style.opacity = '0';
      scrollTopBtn.style.visibility = 'hidden';
    }
  });

  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Animate on Scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll('.card, .teacher-card, .goal-tag');
  animateElements.forEach(el => observer.observe(el));
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .scroll-top-btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
  }
`;
document.head.appendChild(style);
