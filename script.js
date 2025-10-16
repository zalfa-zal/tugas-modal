const modal = document.getElementById('modal');
const openBtn = document.getElementById('ButtonModal');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', () => {
    modal.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});
