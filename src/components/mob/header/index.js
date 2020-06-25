
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

jQuery('.menu-item-has-children').each(function () {
    let _this = jQuery(this);
    let _child = _this.find('>.sub-menu')

    _this.on('click', function () {
        _this.addClass('active');       
    })

    _child.on('click', function () {
        _child.addClass('teste__sabes');       
    })
})