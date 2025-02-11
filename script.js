// Переключение темы (темная/светлая)
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Кнопка с магическим сообщением
document.getElementById("magic-btn").addEventListener("click", function() {
    const messages = ["Привет, мир!", "Ты классный!", "Сегодня твой день!", "Желаю удачи!", "Ты справишься!"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").textContent = randomMessage;
});

// Часы
function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
