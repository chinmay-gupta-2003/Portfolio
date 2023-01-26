export const toggleAboutTabs = (e, tabItems, tabContent) => {
  if (!e.target.classList.contains('tab-item')) return;

  tabItems.forEach((item) => {
    item.classList.remove('active');
  });

  e.target.classList.add('active');

  tabContent.forEach((content) => {
    content.classList.remove('active');
  });

  document.querySelector(`${e.target.dataset.target}`).classList.add('active');
};
