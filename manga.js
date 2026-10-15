const modal = document.getElementById('paymentModal');
const closeBtn = document.querySelector('.close-btn');


const buyButtons = document.querySelectorAll('.btn-buy');


buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex'; 
    });
});


closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Оплата успешно симулирована! Спасибо за покупку.');
    modal.style.display = 'none';
    paymentForm.reset();
});