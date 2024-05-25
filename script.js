let hum = document.querySelector('.hum');
let offscreenmenu = document.querySelector('.offscreenmenu');

hum.addEventListener('click', () => {
    hum.classList.toggle('active');
    offscreenmenu.classList.toggle('active');
});
//Home products link to main produst page
let homeproducts = document.querySelectorAll('.home-products');

homeproducts.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = './products';
    })
});
//Home products page ends here
//Onscroll Navbar starts
let upsidearrow = document.getElementById('upside');
upsidearrow.style.display = 'none'
function navscroll() {
    if (window.scrollY > 500) {
        upsidearrow.style.display = 'block';
    } else {
        upsidearrow.style.display = 'none';
    }
}
//Onscroll Navbar Ends Here

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
// Products Search Engine Function Ends Here


//products categorise by the name of Categories
let productscategories = document.querySelectorAll('.product-category');
function accessories() { };
function mens() { };
function women() { };