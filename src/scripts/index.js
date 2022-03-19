import burger from './modules/burger.js';
// import smoothscroll from 'smoothscroll-polyfill';
// import scroll from './modules/smoothScroll.js';
// import tabbis from './vendor/tabs.js';
// import accordion from './modules/accordion.js';
import Swiper, { Navigation, Autoplay } from 'swiper';
import 'swiper/css';

// Burger ======================================================================
burger('.burger', '.nav', '.nav__link', 'body');

// SmoothScroll ================================================================
// smoothscroll.polyfill();
// scroll('.anchor-link');

// Tabs ========================================================================
// https://github.com/jenstornell/tabbis.js
// tabbis();

// Accordion ===================================================================
// accordion('.accordion__head');

// Swiper ======================================================================
/* eslint-disable no-unused-vars */
const swiperCatalog = new Swiper('.swiper-catalog', {
  modules: [Navigation, Autoplay],
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2000
  },
  speed: 600,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

/* eslint-enable no-unused-vars */
