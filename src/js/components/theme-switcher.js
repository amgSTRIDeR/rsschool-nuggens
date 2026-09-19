export function initThemeSwitcher() {
  const themeSwitcher = document.querySelector('.switch-input');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    savedTheme === 'light' ? (themeSwitcher.checked = false) : (themeSwitcher.checked = true);
    document.documentElement.dataset.theme = savedTheme;
  }

  themeSwitcher.addEventListener('change', () => {
    let currentTheme;
    if (themeSwitcher.checked) {
      currentTheme = 'dark';
    } else {
      currentTheme = 'light';
    }
    document.documentElement.dataset.theme = currentTheme;
    localStorage.setItem('theme', currentTheme);
  });
}
