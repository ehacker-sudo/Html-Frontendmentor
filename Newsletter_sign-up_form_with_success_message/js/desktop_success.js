$("main").height(window.innerHeight);
setInterval(() => {
    if (window.innerWidth >= 576) {
        $('.card').addClass('border-30px');
    }
    else {
        $('.card').removeClass('border-30px');
    }
}, 0);