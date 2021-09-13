function menuToggle(){
    const toggleMenu = document.querySelector('.toggle');
    const section = document.querySelector('section');
    toggleMenu.classList.toggle('active');
    section.classList.toggle('active');
}

VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});