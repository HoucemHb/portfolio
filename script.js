// Menu tab logic
const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.section');

menuItems.forEach(btn => {
  btn.addEventListener('click', () => {
    // activate menu item
    menuItems.forEach(x => x.classList.remove('active'));
    btn.classList.add('active');

    // show right content
    const target = btn.dataset.section;
    sections.forEach(sec => {
      sec.classList.remove('visible');
      if (sec.id === target) {
        sec.classList.add('visible');
      }
    });
  });
});

// Terminal typing effect
const text = [
  "λ Starting portfolio terminal...",
  "> Hello, I'm Lamia",
  "> Full Stack / AI Enthusiast",
  "> Type 'help' for more info"
];

const terminal = document.getElementById('terminal-text');
let line = 0;
let charIndex = 0;

function typeLine() {
  if (line < text.length) {
    if (charIndex < text[line].length) {
      terminal.innerHTML += text[line][charIndex];
      charIndex++;
      setTimeout(typeLine, 50);
    } else {
      terminal.innerHTML += "\n";
      line++;
      charIndex = 0;
      setTimeout(typeLine, 500);
    }
  }
}

window.onload = typeLine;
