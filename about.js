// about.js - small demo script for About.html
document.addEventListener('DOMContentLoaded', function () {
  console.log('about.js loaded');

  // Find the CTA button and add a click handler
  const cta = document.querySelector('.Custom-btn-primary');
  if (cta) {
    cta.addEventListener('click', function () {
      alert('Let\'s create your first task! (Demo)');
    });
  }
});
