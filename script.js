const header=document.querySelector("header");

window.addEventListener("scroll",function()
{
    header.classList.toggle("sticky", window.scrollY > 80)
});


const sc=ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration:  2500,
    reset: true
})

sc.reveal('.home-text', {delay:300});
sc.reveal('.home-img', {delay:400});

sc.reveal('.container', {delay:400});
sc.reveal('.about-img', {});
sc.reveal('.about-text', {delay:300});


sc.reveal('.middle-text', {});
sc.reveal('.row-btn, .shop-content', {delay:300});

sc.reveal('.contact, .review-content', {delay:300});


