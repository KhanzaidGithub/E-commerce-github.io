let hum = document.querySelector('.hum-menu');
let offscreenmenu = document.querySelector('.mobile-menu');

hum.addEventListener('click', () => {
    hum.classList.toggle('active');
    offscreenmenu.classList.toggle('active')
})