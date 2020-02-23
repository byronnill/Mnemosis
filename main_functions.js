$(window).on("scroll", function () {

    let height = $(window).scrollTop();

    if (height > 200) {
        $("#web_title").css("color","blue");
    } else {
        $("#web_title").css("color","black");
    }

});