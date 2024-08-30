let attempts = 5;
const targetNumber = Math.floor(Math.random() * 10) + 1;

function handleGuess(number) {
    const messageElement = document.getElementById('message');
    const attemptsElement = document.getElementById('attempts');

    if (attempts <= 0) {
        messageElement.textContent = "Игра окончена! Попробуйте еще раз.";
        return;
    }

    attempts--;
    attemptsElement.textContent = attempts;

    if (number === targetNumber) {
        messageElement.textContent = "Поздравляем! Вы угадали число!";
    } else if (number < targetNumber) {
        messageElement.textContent = "Загаданное число больше.";
    } else {
        messageElement.textContent = "Загаданное число меньше.";
    }

    if (attempts === 0) {
        messageElement.textContent += " Игра окончена!";
    }
}

function createButtons() {
    const buttonsContainer = document.getElementById('number-buttons');
    for (let i = 1; i <= 10; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => handleGuess(i));
        buttonsContainer.appendChild(button);
    }
}

createButtons();
