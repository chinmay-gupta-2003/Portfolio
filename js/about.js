export const toggleAboutTabs = (e) => {
  if (!e.target.classList.contains('tab-item')) return;

  const tabItems = document.querySelectorAll('.tab-item');
  const aboutSection = document.querySelector('.about-section');
  const tabContent = aboutSection.querySelectorAll('.tab-content');

  tabItems.forEach((item) => {
    item.classList.remove('active');
  });

  e.target.classList.add('active');

  tabContent.forEach((content) => {
    content.classList.remove('active');
  });

  document.querySelector(`${e.target.dataset.target}`).classList.add('active');
};
