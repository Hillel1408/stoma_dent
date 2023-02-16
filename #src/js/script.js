$(document).ready(function () {
    $('.main__slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
    });
});

const navIcon = document.querySelector('.header__nav-icon');
const navList = document.querySelector('.header__nav-list');
const popup = document.querySelector('.popup');

navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('active');
    navList.classList.toggle('active');
    document.body.classList.toggle('lock');
    popup.classList.toggle('active');
});
