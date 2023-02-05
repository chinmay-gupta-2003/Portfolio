import { projectData } from '../dev-data/projectsData.js';

export const projectMarkup = projectData.map(
  (project) =>
    `<div class="portfolio-item">
          <div class="portfolio-item-thumbnail">
            <img src="img/portfolio/1.jpg" alt="" />
          </div>
          <h3 class="portfolio-item-title">${project.name}</h3>
          <button type="button" class="btn view-project-btn">
            view project
          </button>
          <div class="portfolio-item-details">
            <div class="description">
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
            </div>
            <div class="general-info">
              <ul>
                <li>Created - <span>1 jan 2001</span></li>
                <li>technologies used - <span>html,css </span></li>
                <li>role - <span>frontend</span></li>
                <li>
                  view live -
                  <span><a href="#" target="_blank">domain.com</a></span>
                </li>
              </ul>
            </div>
            <div class="mt-4 row align-items-center justify-items-center">
              <button type="button" class="btn">get source code</button>
            </div>
          </div>
      </div>`
);

export const togglePortfolioPopup = () => {
  const main = document.querySelector('.main');
  const portfolioPopup = document.querySelector('.portfolio-popup');

  main.classList.toggle('fade-out');
  portfolioPopup.classList.toggle('open');
  document.body.classList.toggle('hide-scrolling');
};

export const portfolioPopupDetails = (portfolioItem) => {
  const portfolioPopupImage = document.querySelector('.pp-thumbnail img');
  const portfolioPopupHeader = document.querySelector('.pp-header h3');
  const portfolioPopupBody = document.querySelector('.pp-body');

  portfolioPopupImage.src = portfolioItem.querySelector(
    '.portfolio-item-thumbnail img'
  ).src;

  portfolioPopupHeader.innerHTML = portfolioItem.querySelector(
    '.portfolio-item-title'
  ).innerHTML;

  portfolioPopupBody.innerHTML = portfolioItem.querySelector(
    '.portfolio-item-details'
  ).innerHTML;
};
