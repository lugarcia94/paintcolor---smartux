
import $ from 'jquery';

$('.menu__button').click(function () {

    if ($(this).hasClass('actived')) {
        $('body').attr('menu', false);
        $(this).removeClass('actived');
    } else {
        $('body').attr('menu', true);
        $(this).addClass('actived');
    }

})


$('.header').click(function (e) {

    if ($(e.target).hasClass('header')) {
        $('body').attr('menu', false);
        $('.menu__button').removeClass('actived')
    }

})

var menuItems = document.querySelectorAll('.menu-item-has-children')

if (menuItems) {
    Array.from(menuItems).forEach((menuItem) => {
        menuItem.addEventListener('click', (e) => {
            console.log(menuItem.querySelector('ul.sub-menu > ul'));
            if (!menuItem.querySelector('ul.sub-menu ul')) {
                menuItem.classList.toggle('active')
            }else{
                menuItem.classList.toggle('active')
                menuItem.querySelector('ul.sub-menu').classList.toggle('active')
            }
        })
    })
}