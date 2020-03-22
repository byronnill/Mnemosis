$("#header-div").on("click", function (event) {
    event.preventDefault();
    $("#exit-alert").show();
    $("#exit-alert-link").attr("href", "homepage");
    $(window).scrollTop(0);
});

$("#search-btn").on("click", function (event) {
    event.preventDefault();
    $("#exit-alert").show();
    $("#exit-alert-link").attr("href", "homepage");
    $(window).scrollTop(0);
});

$("#view-games").on("click", function (event) {
    event.preventDefault();
    $("#exit-alert").show();
    $("#exit-alert-link").attr("href", "view_games");
    $(window).scrollTop(0);
});

$("#exit-alert-stay").on("click", function () {
    $("#exit-alert").css("display", "none");
    $("#exit-alert-link").attr("href", "#");
});

$("#filter-by-art, #filter-by-business, #filter-by-scitech, #filter-by-general, #filter-by-trivia, #filter-by-sports, #filter-by-others").on("click", function () {
    let bool = $(this).hasClass("active");

    if (bool === true) {
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }
});