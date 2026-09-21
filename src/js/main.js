import '@/scss/main.scss';
import { initHeader } from './components/header.js';
import { initSidebar } from './components/sidebar.js';
import { initThemeSwitcher } from './components/theme-switcher.js';

export function initApp() {
  initHeader();
  initSidebar();
  initThemeSwitcher();
}
