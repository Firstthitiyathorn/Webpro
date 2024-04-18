let products = document.querySelector(".products");
let product = document.querySelectorAll(".products .item")
let arrowLeftProduct = document.querySelector(".arrow-left");
let arrowRightProduct = document.querySelector(".arrow-right");

function nextSliderProduct(){
    let containerWidth = products.clientWidth;
    products.scrollLeft += containerWidth;

    arrowLeftProduct.style.opacity = 1;
    arrowRightProduct.style.opacity = 0;
}

function prevSliderProduct(){
    let containerWidth = products.clientWidth;
    products.scrollLeft -= containerWidth;

    arrowLeftProduct.style.opacity = 0;
    arrowRightProduct.style.opacity = 1;
}

function initProductSlider(){
    arrowLeftProduct.style.opacity = 0;
}

initProductSlider();