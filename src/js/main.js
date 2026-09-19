import '@/scss/main.scss';
import { initHeader } from './components/header.js';
import { initSidebar } from './components/sidebar.js';

export function initApp() {
  initHeader();
  initSidebar();
}
