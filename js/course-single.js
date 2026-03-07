// Course Single Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Tab Switching
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');

      // Remove active class from all tabs and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add active class to clicked tab and corresponding content
      this.classList.add('active');
      document.querySelector(`.tab-content[data-tab="${targetTab}"]`).classList.add('active');
    });
  });

  // Accordion Toggle
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const isActive = this.classList.contains('active');

      // Close all accordions
      accordionHeaders.forEach(h => {
        h.classList.remove('active');
        const content = h.nextElementSibling;
        if (content) {
          content.style.maxHeight = null;
        }
      });

      // Open clicked accordion if it wasn't active
      if (!isActive) {
        this.classList.add('active');
        const content = this.nextElementSibling;
        if (content) {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    });
  });

  // Play Button
  const playButton = document.querySelector('.play-button');
  if (playButton) {
    playButton.addEventListener('click', function() {
      alert('Video preview would play here');
    });
  }
});
