// Подсказки
const HINTS = ['winter', 'cold', 'medium', 'warm', 'hot'];

// Элементы DOM(карта, подсказка, рамки карты)
const treasure_map = document.querySelector('[alt="map"]');
const hint = document.getElementById('hint');
const mapWrapper = document.getElementById('map_wrapper');

// Координаты клада
let treasureCoords;

// Запуск игры по загрузке картинки
function initGame() {
    if (!treasure_map.complete) {
        treasure_map.addEventListener('load', startGame);
    } else {
        startGame();
    }
}

// Генерируем случайные числа для координат клада
function generateRandomNumber(size, gap) {
    return Math.floor(Math.random() * (size - (gap * 2))) + gap;
}

// Установка координат клада
function generateTreasureCoords({width, height}, gap) {
    return {
        x: generateRandomNumber(width, gap),
        y: generateRandomNumber(height, gap)
    };
}

// Считаем расстояние от клика до клада
function getDistanceToTreasure({x: cX, y: cY}, {x: tX, y: tY}) {
    return Math.sqrt((cX - tX) ** 2 + (cY - tY) ** 2);
}

// Меняем класс и текст подсказки
function makeHint(hintName, elem) {
    removePrevClass(elem); // Удаляем класс
    elem.classList.add(hintName); // Новый класс
    elem.textContent = hintName.toUpperCase();
}

// // Открываем окно сообщения и начала новой игры
function openPopUp() {
    const mapWrapper = document.querySelector('#map_wrapper');
    const popup = document.createElement('div');
    popup.classList.add('popup');

    // Кнопка для начала новой игры
    const btnNewGame = document.createElement('button');
    btnNewGame.classList.add('new_game');
    btnNewGame.textContent = 'Start new game';
    btnNewGame.addEventListener('click', startGame)
    // Сообщение о победе
    const winMessage = document.createElement('span');
    winMessage.textContent = 'You won!';
    
    popup.append(winMessage, btnNewGame);
    mapWrapper.append(popup);
    
    const winImg = document.createElement('img');
    winImg.src="img/treasure(1).jpg";
    winImg.alt="treasure";
    const imgPlace = document.getElementById('popup').append(winImg);
}

function endGame() {
    treasure_map.removeEventListener('click', mapClickHandler);
    openPopUp();
}

function removePrevClass(elem) {
    HINTS.forEach((cls) => {
        elem.classList.remove(cls);
    });
}

function generateHint(distance, elem) {
    removePrevClass(elem);
    if(distance < 50) {
        makeHint('hot', elem);
        endGame();
    } else if (distance < 100) {
        makeHint('warm', elem);
    } else if (distance < 150) {
        makeHint('medium', elem);
    } else if (distance < 200) {
        makeHint('cold', elem);
    } else {
        makeHint('winter', elem);
    }
}

function startGame() {
    // Получаем реальные размеры изображения
    const imgWidth = treasure_map.naturalWidth || treasure_map.width;
    const imgHeight = treasure_map.naturalHeight || treasure_map.height;
    
    treasureCoords = generateTreasureCoords({
        width: imgWidth,
        height: imgHeight
    }, 50);
    
    // Удаляем существующее popup, если есть
    const existingPopup = document.querySelector('.popup');
    if (existingPopup) existingPopup.remove();

    // Удаляем старый обработчик перед добавлением нового
    treasure_map.removeEventListener('click', mapClickHandler);
    treasure_map.addEventListener('click', mapClickHandler);
    
    hint.textContent = '';
    removePrevClass(hint);
}

function mapClickHandler({offsetX, offsetY}) {
    const userClickCoords = {
        x: offsetX,
        y: offsetY
    };
    const distance = getDistanceToTreasure(userClickCoords, treasureCoords);
    generateHint(distance, hint);
}

// Запускаем инициализацию игры
initGame();