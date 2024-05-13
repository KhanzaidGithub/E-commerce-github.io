let hum = document.querySelector('.hum');
let offscreenmenu = document.querySelector('.offscreenmenu');

hum.addEventListener('click', () => {
    hum.classList.toggle('active');
    offscreenmenu.classList.toggle('active')
});

