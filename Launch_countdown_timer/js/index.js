$(".icon-facebook").hover(function () {
    // over
    $(this).attr("src", "../images/icon-facebook_active.svg");
}, function () {
    // out
    $(this).attr("src", "../images/icon-facebook.svg");
}
);

$(".icon-facebook").click(function (e) { 
    window.location.href = "https://www.facebook.com/";
});

$(".icon-pinterest").hover(function () {
    // over
    $(this).attr("src", "../images/icon-pinterest_active.svg");
}, function () {
    // out
    $(this).attr("src", "../images/icon-pinterest.svg");
}
);

$(".icon-pinterest").click(function (e) { 
    window.location.href = "https://www.pinterest.com/";
});

$(".icon-instagram").hover(function () {
    // over
    $(this).attr("src", "../images/icon-instagram_active.svg");
}, function () {
    // out
    $(this).attr("src", "../images/icon-instagram.svg");
}
);

$(".icon-instagram").click(function (e) { 
    window.location.href = "https://www.instagram.com/";
});

// $(".flip-seconds").click(function (e) { 
//    $(".flip-seconds").css('transform', 'rotateX(-180deg)'); 
// });


setInterval(() => {
    if (window.innerWidth >= 500) {
        $('.time-title').css('font-size',15);
    }
    else {
        $('.time-title').css('font-size',10);
    }
}, 0);