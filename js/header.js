export const hideSection = (activeSection) => {
  activeSection.classList.toggle('fade-out');
};

export const toggleNavbar = (header) => {
  header.classList.toggle('active');
};
