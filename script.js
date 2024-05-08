let burger = document.getElementById('humburger');
let menu = document.getElementById('menu')

burger.addEventListener('click', () => {
    menu.style.display = 'block';
    burger.classList.toggle("nav", "menu");
})