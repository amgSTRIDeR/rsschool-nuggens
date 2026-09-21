export function initThemeSwitcher() {
  const themeSwitchers = document.querySelectorAll('.switch-input');
  if (!themeSwitchers.length) return;
  const savedTheme = localStorage.getItem('theme') ?? 'light';

  applyTheme(savedTheme);

  themeSwitchers.forEach((themeSwitcher) => {
    themeSwitcher.addEventListener('change', () => {
      const currentTheme = themeSwitcher.checked ? 'dark' : 'light';

      applyTheme(currentTheme);
      localStorage.setItem('theme', currentTheme);
    });
  });

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;

    themeSwitchers.forEach((themeSwitcher) => {
      themeSwitcher.checked = theme === 'dark';
    });
  }
}
