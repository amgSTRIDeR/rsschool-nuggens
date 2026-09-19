export function initSidebar() {
  const currentPath = window.location.pathname;
  const homeLink = document.querySelector('.home-link');
  const catalogLink = document.querySelector('.catalog-link');

  if (homeLink && catalogLink) {
    if (currentPath === '/') {
      homeLink.classList.add('sidebar__link--active');
      catalogLink.classList.remove('sidebar__link--active');
    } else if (currentPath === '/catalog') {
      homeLink.classList.remove('sidebar__link--active');
      catalogLink.classList.add('sidebar__link--active');
    }
  }
}
