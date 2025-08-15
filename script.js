const kittyButton = document.getElementById('kittyButton');
const kittyImage = document.querySelector('.helloKittyImage');

kittyButton.addEventListener('click', () => {
 
  kittyImage.classList.add('clicked');
  createRibbon();

  
  setTimeout(() => {
    kittyImage.classList.remove('clicked');
  }, 200);
});
function createRibbon() {
  const numRibbon = 8;
  const radius = 250;

  const centerX = kittyButton.offsetLeft + kittyButton.offsetWidth / 2;
  const centerY = kittyButton.offsetTop + kittyButton.offsetHeight / 2;

  for (let i = 0; i < numRibbon; i++) {
    const angle = (2 * Math.PI / numRibbon) * i;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    const Ribbon = document.createElement('div');
    Ribbon.className = 'Ribbon';
    Ribbon.innerHTML = '🎀';
    Ribbon.style.left = `${centerX}px`;
    Ribbon.style.top = `${centerY}px`;
    Ribbon.style.setProperty('--x', `${x}px`);
    Ribbon.style.setProperty('--y', `${y}px`);
    document.body.appendChild(Ribbon);

    setTimeout(() => {
      Ribbon.remove();
    }, 1000);
  }
}
const kittySound = document.getElementById("kittySound");

kittyButton.addEventListener("click", () => {
  kittySound.currentTime = 0; 
  kittySound.play();

  
});