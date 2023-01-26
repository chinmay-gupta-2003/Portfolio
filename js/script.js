import { projectMarkup } from './portfolio.js';
import { toggleAboutTabs } from './about.js';
import { togglePortfolioPopup } from './portfolio.js';
import { portfolioPopupDetails } from './portfolio.js';

const main = document.querySelector('.main');
const aboutSection = document.querySelector('.about-section');
const tabsContainer = document.querySelector('.about-tabs');
const tabItems = document.querySelectorAll('.tab-item');
const tabContent = aboutSection.querySelectorAll('.tab-content');

tabsContainer.addEventListener('click', (e) =>
  toggleAboutTabs(e, tabItems, tabContent)
);

const portfolioSection = document.querySelector('.project-container');
const portfolioPopup = document.querySelector('.portfolio-popup');
const portfolioPopupCloseBtn = document.querySelector('.pp-close');
const portfolioPopupImage = document.querySelector('.pp-thumbnail img');
const portfolioPopupHeader = document.querySelector('.pp-header h3');
const portfolioPopupBody = document.querySelector('.pp-body');

portfolioSection.insertAdjacentHTML('afterbegin', projectMarkup.join(''));

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('view-project-btn')) {
    togglePortfolioPopup(main, portfolioPopup);

    portfolioPopup.scrollTo(0, 0);

    portfolioPopupDetails(
      e.target.parentElement,
      portfolioPopupImage,
      portfolioPopupHeader,
      portfolioPopupBody
    );
  }
});

portfolioPopupCloseBtn.addEventListener('click', (e) => {
  togglePortfolioPopup(main, portfolioPopup);
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('pp-inner'))
    togglePortfolioPopup(main, portfolioPopup);
});

const skills = document.querySelectorAll('.skill-item-progress');

skills.forEach((skill) => {
  const skillProgress = skill.dataset.progress;
  if (skillProgress) skill.style.width = skillProgress;
});
