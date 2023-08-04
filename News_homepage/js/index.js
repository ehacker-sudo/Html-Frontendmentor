$('.col-xxl-4').height($('.col-xxl-8').height());

console.log(1);
$('.main-text').addClass('fs-60px');
console.log(window.innerWidth);
setInterval(() => {
    console.log(window.innerWidth);
    if (screen.availWidth > 1200 && screen.availWidth <= 1444) {
        $('.main-text').addClass('fs-74px');    
        $('.main-text').removeClass('fs-60px');
    } else {
        $('.main-text').removeClass('fs-74px');
        $('.main-text').addClass('fs-60px');
    }
}, 0);