import {
  skillDataBackend,
  skillDataFrontend,
  skillDataLanguage,
} from '../dev-data/skillData.js';

export const skillsMarkup = () => {
  const markupLanguage = skillDataLanguage
    .map(
      (skill) => `<div class="skill-item">${skill.name}
                  <div class="skill-item-progress" data-progress="${skill.progress}"></div>
                </div>`
    )
    .join('');

  const skillItemLanguage = document.querySelector('.skill-item-language');
  skillItemLanguage.innerHTML = markupLanguage;

  //

  const markupFrontend = skillDataFrontend
    .map(
      (skill) => `<div class="skill-item">${skill.name}
                  <div class="skill-item-progress" data-progress="${skill.progress}"></div>
                </div>`
    )
    .join('');

  const skillItemFrontend = document.querySelector('.skill-item-frontend');
  skillItemFrontend.innerHTML = markupFrontend;

  //

  const markupBackend = skillDataBackend
    .map(
      (skill) => `<div class="skill-item">${skill.name}
                  <div class="skill-item-progress" data-progress="${skill.progress}"></div>
                </div>`
    )
    .join('');

  const skillItemBackend = document.querySelector('.skill-item-backend');
  skillItemBackend.innerHTML = markupBackend;
};

export const skillsProgressDisplay = (skill) => {
  const skillProgress = skill.dataset.progress;
  if (skillProgress) skill.style.width = skillProgress;
};
