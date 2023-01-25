const cursor = document.querySelector('.cursor');
const cursorScale = document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,span,a');
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,

  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

window.addEventListener('mousemove', function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

cursorScale.forEach((link) => {
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow');
    cursor.classList.remove('grow-small');
  });

  link.addEventListener('mousemove', () => {
    cursor.classList.add('grow-small');
    if (link.classList.contains('grow-large')) {
      cursor.classList.remove('grow-small');
      cursor.classList.add('grow');
    }
  });
});
