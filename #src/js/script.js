$(document).ready(function () {
    $('.main__slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
    });
    $('.product__slider-big').slick({
        arrows: false,
        dots: false,
        asNavFor: '.product__slider-small',
    });
    $('.product__slider-small').slick({
        asNavFor: '.product__slider-big',
        focusOnSelect: true,
        arrows: false,
        dots: false,
        slidesToShow: 'auto',
    });
});

const navIcon = document.querySelector('.header__nav-icon');
const navList = document.querySelector('.header__nav-list2');

function a(e) {
    if (
        !e.target.closest('.header__nav-list2') &&
        !e.target.closest('.header__nav-icon')
    ) {
        navIcon.classList.toggle('active');
        navList.classList.toggle('active');
        document.removeEventListener('click', a);
    }
}

navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('active');
    navList.classList.toggle('active');
    if (navList.classList.contains('active')) {
        document.addEventListener('click', a);
    } else {
        document.removeEventListener('click', a);
    }
});

const navItems = document.querySelectorAll('.header__nav-title');

navItems.forEach((item) => {
    if (item.parentNode.childNodes[3]) {
        item.classList.add('asd');
    }
    item.addEventListener('click', () => {
        item.parentNode.childNodes[3].classList.toggle('active');
    });
});
