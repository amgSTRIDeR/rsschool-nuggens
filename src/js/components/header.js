export function initHeader() {
  const menuButton = document.querySelector('.menu-button');
  if (!menuButton) return;

  const sidebar = document.querySelector('.sidebar');

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

    if (sidebar) {
      if (isOpen) {
        blockPage();
        sidebar.classList.add('is-open');
      } else {
        unBlockPage();
        sidebar.classList.remove('is-open');
      }
    }
  });

  const mobileMedia = window.matchMedia('(width > 769px)');

  function handleBreakpoint() {
    if (menuButton.classList.contains('is-open')) {
      unBlockPage();
      menuButton.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Close menu');
    }

    if (sidebar) {
      sidebar.classList.remove('is-open');
    }
  }

  handleBreakpoint();

  mobileMedia.addEventListener('change', handleBreakpoint);

  function blockPage() {
    const bodyElement = document.querySelector('body');
    bodyElement.classList.add('blocked');
  }

  function unBlockPage() {
    const bodyElement = document.querySelector('body');
    bodyElement.classList.remove('blocked');
  }

  //TODO
  const heroButtons = document.querySelectorAll('.hero-footer button');
  heroButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const url = '/catalog';

      if (url) {
        window.location.href = url;
      }
    });
  });
}
