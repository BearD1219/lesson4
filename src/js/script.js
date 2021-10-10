const menuOpen = document.querySelector('.burger'),
    menuClose = document.querySelector('.menu__close'),
    menu = document.querySelector('.menu'),
    overlay = document.querySelector('.menu__overlay');


menuOpen.addEventListener('click', () => {
    menu.classList.add('active');
    overlay.classList.add('active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
})

const percent = document.querySelectorAll(".skills__level-percent"),
    skillBar = document.querySelectorAll(".skills__level-bar-content");

percent.forEach((item, index) => {
    skillBar[index].style.width = item.innerHTML;
});