const homeText = document.querySelector('.home-text');

const homeTextElements = homeText.querySelectorAll('p,h1,h2');

homeTextElements.forEach((element) => (element.style.display = 'inline-block'));
