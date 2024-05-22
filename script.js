let hum = document.querySelector('.hum');
let offscreenmenu = document.querySelector('.offscreenmenu');

hum.addEventListener('click', () => {
    hum.classList.toggle('active');
    offscreenmenu.classList.toggle('active');
});


// Products Search Input

function search() {
    let input = document.getElementById('input').value.toLowerCase();
    let products = document.querySelectorAll('.product');

    products.forEach((product) => {
        let title = product.querySelector('#product-title');

        let value = title.innerHTML || title.innerText || title.textContent;

        if (value.toLowerCase().indexOf(input) > -1) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
        document.getElementById('input').innerText = '';
    });

};

function accessories() { };
function mens() { };
function women() { };