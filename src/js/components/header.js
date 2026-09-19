export function initHeader() {
  const menuButton = document.querySelector('.menu-button');
  if (!menuButton) return;

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
}
