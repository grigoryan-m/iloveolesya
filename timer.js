// 🔴 УКАЖИ ДАТУ НАЧАЛА ВАШИХ ОТНОШЕНИЙ ЗДЕСЬ
// Формат: 'YYYY-MM-DDTHH:MM:SS'
const startDate = new Date('2024-11-08T22:42:00');

function updateTimer() {
    const now = new Date();
    let diff = Math.floor((now - startDate) / 1000);

    const days = Math.floor(diff / (3600 * 24));
    diff %= 3600 * 24;

    const hours = Math.floor(diff / 3600);
    diff %= 3600;

    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);
