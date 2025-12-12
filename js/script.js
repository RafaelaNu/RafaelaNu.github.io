// js/script.js — fade-in on load and basic helpers
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(s => {
    const rect = s.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) s.classList.add('visible');
  });
  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100) section.classList.add('visible');
    });
  });
});
