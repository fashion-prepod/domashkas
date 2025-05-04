const map = document.getElementById(`map`);
const hint = document.getElementById(`hint`);

const treasure = {
    x:Math.floor(Math.random() * (map.clientWidth - 100)) + 50,
    y:Math.floor(Math.random() * (map.clientHeight - 100)) + 50
};

let counterClick = 0;


let smth =  (event) => {
    let result = Math.sqrt((treasure.x - event.offsetX)**2 + (treasure.y - event.offsetY)**2);

    counterClick++;

    if (result < 20) {
        hint.textContent = `Клад найден! за ${counterClick} кликов`;
        alert(`Клад найден! за ${counterClick} кликов`);
        const chest = document.createElement("img");
        document.body.appendChild(chest);
        chest.src = "bl.png"; 
        chest.style.position = "absolute";
        chest.style.left = event.offsetX + "px";
        chest.style.top = event.offsetY + "px";
        chest.style.height = 100 + "px";
        chest.style.backgroundImage = "none";
        map.removeEventListener(`click`, smth);
    }  else if (result < 50) {
        hint.textContent = ``;
        setTimeout(() => hint.textContent = `ГОРЯЧО!` , 200);
    } else if (result < 150) {
        hint.textContent = ``;
        setTimeout(() => hint.textContent = `ТЕПЛО!`, 200);
    } else if (result < 250){
        hint.textContent = ``;
        setTimeout(() => hint.textContent = `ПРОХЛАДНО!`, 200);
    }else{
        hint.textContent = ``;
        setTimeout(() => hint.textContent = `МОРОЗ`, 200);
    }
}

map.addEventListener(`click`, smth);



// Создать карту сокровищ (использовать картинку с сокровищам)
// Внизу под картой должен отобраться текст (тепло, холодно, горячо и тд)
// Вначале программы вы должны "спрятать" клад (сгенерить объект с x и y клада)
// const treasure = {
//     x: 23, // должно быть сгенерено рандомно
//     y: 51 // должно быть сгенерено рандомно
// }
// Сгенеренные координаты клада НЕ должны превышать размера картинки карты
// Обрабатывать каждый клик пользователя по карте, и рассчитывать насколько далеко пользователь кликнул от клада (по теореме Пифагора)
// Брать координаты клика в объекте события
// --- Если расстояние от клика до клада < 20 (то считаем что клад НАЙДЕН, и СОЗДАЕМ элемент картинка с сундуком, и позиш absolute рисуем в месте где кликнул пользоваель )
// После того как клад найден ИГРА НЕ ДОЛЖНА ПРОДОЛЖАТЬ работать (removeEventListener)
// Таблица расстояний и подсказок (в зависимости от расстояни, ПОД КАРТОЙ долэна менять ся подсказка)
// < 50 ГОРЯЧО
// < 150 ТЕПЛО
// < 250 ПРОХЛАДНО
// < 350 ЛЮТЫЙ МОРОЗ!



