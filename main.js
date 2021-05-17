document.querySelector(".menu-btn").addEventListener("click",() => {
    document.querySelector(".nav-me").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cards', { delay:500 });
ScrollReveal().reveal('.cards-banner1', { delay:500 });
ScrollReveal().reveal('.cards-banner2', { delay:500 });