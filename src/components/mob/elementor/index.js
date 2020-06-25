
if (jQuery('body').hasClass('home')) {
    if (jQuery('.elementor-widget-container .menu-menu-home-categorias-container').length > 0) {
        jQuery('.elementor-widget-container .menu-menu-home-categorias-container').attr('uk-slider', '')
        jQuery('.elementor-widget-container .menu-menu-home-categorias-container > ul').addClass('uk-slider-items uk-child-width-1-2 uk-child-width-1-6@s uk-child-width-1-7@m')
        jQuery('.elementor-widget-container .menu-menu-home-categorias-container').append(`
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
        `)
    }

    if (jQuery('.elementor-widget-container .menu-menu-home-marcas-container').length > 0) {
        jQuery('.elementor-widget-container .menu-menu-home-marcas-container').attr('uk-slider', '')
        jQuery('.elementor-widget-container .menu-menu-home-marcas-container > ul').addClass('uk-slider-items uk-child-width-1-2 uk-child-width-1-6@s uk-child-width-1-7@m')
        jQuery('.elementor-widget-container .menu-menu-home-marcas-container').append(`
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
        `)
    }
} 
