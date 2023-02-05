export const hideSection = () => {
  const activeSection = document.querySelector('section.active');

  activeSection.classList.toggle('fade-out');
};

export const toggleNavbar = () => {
  const header = document.querySelector('.header');

  header.classList.toggle('active');
};

export const toggleSections = (e) => {
  const overlay = document.querySelector('.overlay');
  const navToggler = document.querySelector('.nav-toggler');

  overlay.classList.add('active');
  navToggler.classList.add('hide');

  const goToSection = document.querySelector(e.target.hash);
  const activeSection = document.querySelector('section.active');

  if (e.target.classList.contains('nav-item')) toggleNavbar();
  else {
    hideSection();
    document.body.classList.add('hide-scrolling');
  }

  setTimeout(() => {
    activeSection.classList.remove('active', 'fade-out');
    goToSection.classList.add('active');
    window.scrollTo(0, 0);
    document.body.classList.remove('hide-scrolling');
    navToggler.classList.remove('hide');
    document.querySelector('.overlay').classList.remove('active');
  }, 400);
};
