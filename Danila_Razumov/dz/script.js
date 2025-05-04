const map = document.getElementById('map');
const podskazki = document.getElementById('podskazki');
const mapWidth = map.clientWidth;
const mapHeight = map.clientHeight;


const treasure = {
  x: Math.floor(Math.random() * mapWidth),
  y: Math.floor(Math.random() * mapHeight)
};


function showTreasure(x, y) {
  const chest = document.createElement('div');
  chest.classList.add('treasure');
  chest.style.left = `${x - 16}px`;
  chest.style.top = `${y - 16}px`;
  map.appendChild(chest);
}


function Click(event) {
  const size = map.getBoundingClientRect(); // размеры и координаты элемента относительно окна браузера
  const clickX = event.clientX - size.left;
  const clickY = event.clientY - size.top;

  const dx = treasure.x - clickX;
  const dy = treasure.y - clickY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  let message = '';
  if (distance < 20) {
    message = '🎉 КЛАД НАЙДЕН!';
    showTreasure(clickX, clickY);
    map.removeEventListener('click', Click);
  } else if (distance < 50) {
    message = '🔥 ГОРЯЧО';
  } else if (distance < 150) {
    message = '🌡️ ТЕПЛО';
  } else if (distance < 250) {
    message = '❄️ ПРОХЛАДНО';
  } else {
    message = '🥶 ЛЮТЫЙ МОРОЗ!';
  }

  podskazki.textContent = message;
}

map.addEventListener('click', Click);
