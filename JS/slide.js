let list = document.querySelector(".wrapper .banner");
let items = document.querySelectorAll(".wrapper .banner .item")
let dots = document.querySelectorAll(".wrapper .dot .item")

let active = 0;
let lengthItems = items.length - 1;

function next(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1
    }
    reloadSlider();
}

let refreshSlider = setInterval(() => next(),3000)

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + "px"

    let lastActiveDot = document.querySelector(".wrapper .dot .item.active");
    lastActiveDot.classList.remove("active");
    dots[active].classList.add("active");

    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => next(),3000)
}

dots.forEach((dot,key) => {
    dot.addEventListener("click",() => {
        active = key;
        reloadSlider();
    })
})