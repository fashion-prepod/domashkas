document.addEventListener('DOMContentLoaded', function() {
    const map = document.getElementById('map');
    const hint = document.getElementById('hint');
    const counter = document.getElementById('counter');
    
    // Размеры игрового поля
    const MAP_WIDTH = map.offsetWidth;
    const MAP_HEIGHT = map.offsetHeight;
    let attempts = 0;

    // Функция генерации случайного числа
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Генерация координат сокровища
    function generateTreasurePosition() {
        const margin = 40; // Отступ от краев
        return {
            x: Math.floor(getRandomArbitrary(margin, MAP_WIDTH - margin)),
            y: Math.floor(getRandomArbitrary(margin, MAP_HEIGHT - margin))
        };
    }

    // Создаем сокровище
    const treasure = generateTreasurePosition();
    console.log('Сокровище спрятано в:', treasure);

    // Обработчик кликов
    function handleClick(e) {
        attempts++;
        counter.textContent = `Попыток: ${attempts}`;
        
        // Получаем координаты клика
        const rect = map.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        
        // Рассчитываем расстояние до клада
        const distance = Math.sqrt(
            Math.pow(clickX - treasure.x, 2) + 
            Math.pow(clickY - treasure.y, 2)
        );
        
        // Проверяем, найден ли клад
        if (distance < 20) {
            hint.textContent = "🎉 УРА! КЛАД НАЙДЕН! 🎉";
            hint.style.color = "#e67e22";
            
            // Показываем сокровище
            const treasureEl = document.createElement('div');
            treasureEl.id = 'treasure';
            treasureEl.innerHTML = '💰';
            treasureEl.style.fontSize = '50px';
            treasureEl.style.left = (clickX - 25) + 'px';
            treasureEl.style.top = (clickY - 25) + 'px';
            
            map.appendChild(treasureEl);
            map.style.cursor = 'default';
            map.removeEventListener('click', handleClick);
            return;
        }
        
        // Обновляем подсказку
        updateHint(distance);
    }

    // Функция обновления подсказки
    function updateHint(distance) {
        let message, color;
        
        if (distance < 50) {
            message = "🔥 ГОРЯЧО!";
            color = "#c0392b";
        } else if (distance < 150) {
            message = "♨️ ТЕПЛО!";
            color = "#e74c3c";
        } else if (distance < 250) {
            message = "💨 ПРОХЛАДНО";
            color = "#3498db";
        } else if (distance < 350) {
            message = "❄️ ХОЛОДНО";
            color = "#2980b9";
        } else {
            message = "🥶 ЛЮТЫЙ МОРОЗ!";
            color = "#2c3e50";
        }
        
        hint.textContent = message;
        hint.style.color = color;
    }

    // Начинаем игру
    map.addEventListener('click', handleClick);
});