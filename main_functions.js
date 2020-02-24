$(window).on("scroll", function () {

    let height = $(window).scrollTop();

    if (height > 0) {
        $("#web_title").css("color","blue");
    } else {
        $("#web_title").css("color","black");
    }

});