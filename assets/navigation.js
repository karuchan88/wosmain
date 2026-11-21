document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-toggle');
  const menu = document.getElementById('primary-navigation');
  if (!button || !menu) return;
  const close = () => { button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-label', 'Open navigation menu'); menu.classList.remove('is-open'); };
  button.addEventListener('click', () => {
    const opening = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(opening));
    button.setAttribute('aria-label', opening ? 'Close navigation menu' : 'Open navigation menu');
    menu.classList.toggle('is-open', opening);
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { close(); button.blur(); } });
  document.addEventListener('click', event => { if (!button.contains(event.target) && !menu.contains(event.target)) close(); });
  window.matchMedia('(min-width: 981px)').addEventListener('change', close);
});
