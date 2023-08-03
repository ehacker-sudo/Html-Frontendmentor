$("main").height(window.innerHeight);
setInterval(() => {
    if (window.innerWidth >= 1200) {
        $('.banner-desktop').removeClass('d-none');
        $('.banner-mobile').addClass('d-none');
    }
    else {
        $('.banner-desktop').addClass('d-none');
        $('.banner-mobile').removeClass('d-none');
    }

    if (window.innerWidth >= 576) {
        $('.banner-desktop').addClass('border-30px');
        $('.banner-mobile').addClass('border-30px');
        $('.card').addClass('border-30px');
    }
    else {
        $('.banner-desktop').removeClass('border-30px');
        $('.banner-mobile').removeClass('border-30px');
        $('.card').removeClass('border-30px');
    }
}, 0);


function validate() {
    $(".invalid-message").removeClass('d-none');
    $(".form-control").addClass('invalid-input');
}