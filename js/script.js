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
