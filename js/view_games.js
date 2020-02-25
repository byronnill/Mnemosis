let none = $("#filter-by-none");
let art = $("#filter-by-art");
let business = $("#filter-by-business");
let scitech = $("#filter-by-scitech");
let general = $("#filter-by-general");
let trivia = $("#filter-by-trivia");
let sports = $("#filter-by-sports");
let others = $("#filter-by-others");

none.on("click", function () {
    none.addClass("active");

    art.removeClass("active");
    business.removeClass("active");
    scitech.removeClass("active");
    general.removeClass("active");
    trivia.removeClass("active");
    sports.removeClass("active");
    others.removeClass("active");

    $(".card").parent().show();
});

art.on("click", function () {
    art.addClass("active");

    none.removeClass("active");
    business.removeClass("active");
    scitech.removeClass("active");
    general.removeClass("active");
    trivia.removeClass("active");
    sports.removeClass("active");
    others.removeClass("active");

    $(".card").parent().show();
    $(".container").find(".card-business").parent().css("display", "none");
    $(".container").find(".card-scitech").parent().css("display", "none");
    $(".container").find(".card-general").parent().css("display", "none");
    $(".container").find(".card-trivia").parent().css("display", "none");
    $(".container").find(".card-sports").parent().css("display", "none");
    $(".container").find(".card-others").parent().css("display", "none");
});

business.on("click", function () {
    business.addClass("active");

    none.removeClass("active");
    art.removeClass("active");
    scitech.removeClass("active");
    general.removeClass("active");
    trivia.removeClass("active");
    sports.removeClass("active");
    others.removeClass("active");

    $(".card").parent().show();
    $(".container").find(".card-art").parent().css("display", "none");
    $(".container").find(".card-scitech").parent().css("display", "none");
    $(".container").find(".card-general").parent().css("display", "none");
    $(".container").find(".card-trivia").parent().css("display", "none");
    $(".container").find(".card-sports").parent().css("display", "none");
    $(".container").find(".card-others").parent().css("display", "none");
});

scitech.on("click", function () {
    scitech.addClass("active");

    none.removeClass("active");
    art.removeClass("active");
    business.removeClass("active");
    general.removeClass("active");
    trivia.removeClass("active");
    sports.removeClass("active");
    others.removeClass("active");

    $(".card").parent().show();
    $(".container").find(".card-art").parent().css("display", "none");
    $(".container").find(".card-business").parent().css("display", "none");
    $(".container").find(".card-general").parent().css("display", "none");
    $(".container").find(".card-trivia").parent().css("display", "none");
    $(".container").find(".card-sports").parent().css("display", "none");
    $(".container").find(".card-others").parent().css("display", "none");
});

general.on("click", function () {
    general.addClass("active");

    none.removeClass("active");
    art.removeClass("active");
    business.removeClass("active");
    scitech.removeClass("active");
    trivia.removeClass("active");
    sports.removeClass("active");
    others.removeClass("active");

    $(".card").parent().show();
    $(".container").find(".card-art").parent().css("display", "none");
    $(".container").find(".card-business").parent().css("display", "none");
    $(".container").find(".card-scitech").parent().css("display", "none");
    $(".container").find(".card-trivia").parent().css("display", "none");
    $(".container").find(".card-sports").parent().css("display", "none");
    $(".container").find(".card-others").parent().css("display", "none");
});

trivia.on("click", function () {
    trivia.addClass("active");

    none.removeClass("active");
    art.removeClass("active");
    business.removeClass("active");
    scitech.removeClass("active");
    general.removeClass("active");
    sports.removeClass("active");
    others.removeClass("active");

    $(".card").parent().show();
    $(".container").find(".card-art").parent().css("display", "none");
    $(".container").find(".card-business").parent().css("display", "none");
    $(".container").find(".card-scitech").parent().css("display", "none");
    $(".container").find(".card-general").parent().css("display", "none");
    $(".container").find(".card-sports").parent().css("display", "none");
    $(".container").find(".card-others").parent().css("display", "none");
});

sports.on("click", function () {
    sports.addClass("active");

    none.removeClass("active");
    art.removeClass("active");
    business.removeClass("active");
    scitech.removeClass("active");
    general.removeClass("active");
    trivia.removeClass("active");
    others.removeClass("active")

    $(".card").parent().show();
    $(".container").find(".card-art").parent().css("display", "none");
    $(".container").find(".card-business").parent().css("display", "none");
    $(".container").find(".card-scitech").parent().css("display", "none");
    $(".container").find(".card-general").parent().css("display", "none");
    $(".container").find(".card-trivia").parent().css("display", "none");
    $(".container").find(".card-others").parent().css("display", "none");
});

others.on("click", function () {
    others.addClass("active");

    none.removeClass("active");
    art.removeClass("active");
    business.removeClass("active");
    scitech.removeClass("active");
    general.removeClass("active");
    trivia.removeClass("active");
    sports.removeClass("active");

    $(".card").parent().show();
    $(".container").find(".card-art").parent().css("display", "none");
    $(".container").find(".card-business").parent().css("display", "none");
    $(".container").find(".card-scitech").parent().css("display", "none");
    $(".container").find(".card-general").parent().css("display", "none");
    $(".container").find(".card-trivia").parent().css("display", "none");
    $(".container").find(".card-sports").parent().css("display", "none");
});