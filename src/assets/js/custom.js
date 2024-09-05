jQuery(document).ready(function($) {

    // Responsive Preview Tests
    $('.preview-test').click(function(e) {
        e.preventDefault();
        $('.preview-test').removeClass('preview-devices-active');
        $(this).addClass('preview-devices-active');

        var previewmode = $(this).attr('id').replace('-test', '');
        $('#preview-frame').removeClass();
        $('#preview-frame').addClass(previewmode);

    });

    $('.icon-cancel-circled').click(function() {
        $('.social-share').hide();
    });

});

$(document).ready(function() {
    if ($(window).width() < 854) {
        startCarousel();
    } else {
        $('.carousel slide carousel-fade').addClass('off');
    }
});

$(window).resize(function() {
    if ($(window).width() < 854) {
        startCarousel();
    } else {
        stopCarousel();
    }
});

function startCarousel() {
    $("#carousel slide carousel-fade").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 500,
        margin: 10,
        paginationSpeed: 400,
        autoplay: true,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
    });
}

function stopCarousel() {
    var owl = $('.carousel slide carousel-fade');
    owl.trigger('destroy.carousel slide carousel-fade');
    owl.addClass('off');
}