// Масив можливих клавіш
const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'q'];
let currentKeyIndex = 0;

// Отримуємо елементи DOM
const messageElement = document.getElementById('message');
const keyElement = document.getElementById('key');
const newGameBtn = document.getElementById('newGameBtn');

// Функція для встановлення нової поточної клавіші
function setNewKey() {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    keyElement.textContent = keys[currentKeyIndex];
}

// Запускаємо нову гру
function startNewGame() {
    setNewKey();
    messageElement.textContent = 'Натисни клавішу:';
    PNotify.success({
        text: 'Нова гра розпочалася!',
        delay: 2000
    });
}

// Обробник події keydown
document.addEventListener('keydown', function(event) {
    const pressedKey = event.key.toLowerCase(); // Перетворюємо на нижній регістр для коректного порівняння
    if (pressedKey === keys[currentKeyIndex]) {
        PNotify.success({
            text: `Ви натиснули правильну клавішу: ${pressedKey}`,
            delay: 2000
        });
        setNewKey(); // Встановлюємо нову поточну клавішу
    } else {
        PNotify.error({
            text: `Неправильна клавіша: ${pressedKey}. Спробуйте знову!`,
            delay: 2000
        });
    }
});

// Обробник події keypress для запобігання дій за замовчуванням
document.addEventListener('keypress', function(event) {
    event.preventDefault();
});

// Кнопка "Нова гра"
newGameBtn.addEventListener('click', function() {
    startNewGame();
});

// Стартова ініціалізація гри
startNewGame();
