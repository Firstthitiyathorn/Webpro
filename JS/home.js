function animateheader(){
    var animate = {
        distance: "150%",
        origin:"top",
        opacity: 0,
        duration:800,
        easing: 'ease'
    };
    ScrollReveal().reveal('.header' , animate);
}

function animatebox(){
    var animate = {
        distance: "50%",
        origin:"top",
        opacity: 0,
        duration:1000,
        interval:600,
        easing: 'ease'
    };
    
    ScrollReveal().reveal('.hot-deal div' , animate);
}

function main(){
    animateheader();
    animatebox();
}

main();