import { projectMarkup } from './portfolio.js';
import { toggleAboutTabs } from './about.js';
import { togglePortfolioPopup } from './portfolio.js';
import { portfolioPopupDetails } from './portfolio.js';
import { hideSection, toggleNavbar, toggleSections } from './header.js';

// ------- Header ------- //

const navToggler = document.querySelector('.nav-toggler');

navToggler.addEventListener('click', () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle('hide-scrolling');
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('link-item') && e.target.hash !== '') {
    toggleSections(e);
  }
});

// ------- About ------- //

const tabsContainer = document.querySelector('.about-tabs');
tabsContainer.addEventListener('click', toggleAboutTabs);

// ------- Portfolio ------- //

const portfolioSection = document.querySelector('.project-container');
const portfolioPopup = document.querySelector('.portfolio-popup');
const portfolioPopupCloseBtn = document.querySelector('.pp-close');

portfolioSection.insertAdjacentHTML('afterbegin', projectMarkup.join(''));

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('view-project-btn')) {
    togglePortfolioPopup();
    portfolioPopup.scrollTo(0, 0);
    portfolioPopupDetails(e.target.parentElement);
  }
});

portfolioPopupCloseBtn.addEventListener('click', (e) => {
  togglePortfolioPopup();
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('pp-inner')) togglePortfolioPopup();
});

// ------- Skills ------- //

const skills = document.querySelectorAll('.skill-item-progress');

skills.forEach((skill) => {
  const skillProgress = skill.dataset.progress;
  if (skillProgress) skill.style.width = skillProgress;
});
