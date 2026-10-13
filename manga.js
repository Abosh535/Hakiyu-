const modal = document.getElementById('paymentModal');
const closeBtn = document.querySelector('.close-btn');

// Находим ВСЕ кнопки "Купить" на странице (так как их много в каталоге)
const buyButtons = document.querySelectorAll('.btn-buy');

// Для каждой кнопки вешаем событие клика
buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex'; // Показываем модальное окно
    });
});

// Закрытие по крестику
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие при клике вне окна (на темный фон)
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработка отправки формы (имитация оплаты)
const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Оплата успешно симулирована! Спасибо за покупку.');
    modal.style.display = 'none';
    paymentForm.reset(); // Очищаем поля формы
});