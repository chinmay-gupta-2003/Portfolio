import { projectMarkup } from "./projects.js";

const main = document.querySelector(".main");
const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");
const tabItems = document.querySelectorAll(".tab-item");
const tabContent = aboutSection.querySelectorAll(".tab-content");

tabsContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("tab-item")) return;

  tabItems.forEach((item) => {
    item.classList.remove("active");
  });

  e.target.classList.add("active");

  tabContent.forEach((content) => {
    content.classList.remove("active");
  });

  document.querySelector(`${e.target.dataset.target}`).classList.add("active");
});

const portfolioSection = document.querySelector(".project-container");
const portfolioPopup = document.querySelector(".portfolio-popup");
const portfolioPopupCloseBtn = document.querySelector(".pp-close");
const portfolioPopupImage = document.querySelector(".pp-thumbnail img");
const portfolioPopupHeader = document.querySelector(".pp-header h3");
const portfolioPopupBody = document.querySelector(".pp-body");

portfolioSection.insertAdjacentHTML("afterbegin", projectMarkup.join(""));

function togglePortfolioPopup() {
  main.classList.toggle("fade-out");
  portfolioPopup.classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
}

function portfolioPopupDetails(portfolioItem) {
  portfolioPopupImage.src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;

  portfolioPopupHeader.innerHTML = portfolioItem.querySelector(
    ".portfolio-item-title"
  ).innerHTML;

  portfolioPopupBody.innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    portfolioPopup.scrollTo(0, 0);
    portfolioPopupDetails(e.target.parentElement);
  }
});

portfolioPopupCloseBtn.addEventListener("click", togglePortfolioPopup);

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) togglePortfolioPopup();
});
