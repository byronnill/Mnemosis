// window.onscroll = function () {
//
//     let height = document.body.scrollTop;
//
//     if (height > 50)
//         $("body").css("background-color", "cornflower");
//     else
//         $("body").css("background-color", "white");
//
// };
//

let none = $("#filter-by-none");
let art = $("#filter-by-art");
let business = $("#filter-by-business");
let scitech = $("#filter-by-scitech");
let general = $("#filter-by-general");
let trivia = $("#filter-by-trivia");
let sports = $("#filter-by-sports");
let others = $("#filter-by-others");

let search = $("#search-btn");

search.on("click", function () {
    let keywords = $("#search-box").val();

    if ($(".container").find(".card-text:not(:contains(" + keywords + "))").length !== 0)
        $(".container").find(".card-text:not(:contains(" + keywords + "))").parent().parent().parent().css("display", "none");
    else{
        $("#search-box").attr("placeholder", "no strings found");
    }
});

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

function check () {
    let arr = [art, business, scitech, general, trivia, sports, others];
    let active = [];

    arr.forEach(function (i) {
        if (i.hasClass("active"))
            active.push(i);
    });

    if (active.length === 0) {
        none.addClass("active");
        $(".card").parent().show();
    } else {
        if (active.indexOf(art) !== -1)
            $(".container").find(".card-art").parent().show();
        if (active.indexOf(business) !== -1)
            $(".container").find(".card-business").parent().show();
        if (active.indexOf(scitech) !== -1)
            $(".container").find(".card-scitech").parent().show();
        if (active.indexOf(general) !== -1)
            $(".container").find(".card-general").parent().show();
        if (active.indexOf(trivia) !== -1)
            $(".container").find(".card-trivia").parent().show();
        if (active.indexOf(sports) !== -1)
            $(".container").find(".card-sports").parent().show();
        if (active.indexOf(others) !== -1)
            $(".container").find(".card-others").parent().show();
    }

}

$("#filter-by-art, #filter-by-business, #filter-by-scitech, #filter-by-general, #filter-by-trivia, #filter-by-sports, #filter-by-others").on("click", function () {
    if (none.hasClass("active")) {
        $(".card").parent().css("display", "none");
        none.removeClass("active");
    }
});

art.on("click", function () {
    if (art.hasClass("active")) {
        art.removeClass("active");
        $(".container").find(".card-art").parent().css("display", "none");
        check();
    } else {
        art.addClass("active");

        $(".container").find(".card-art").parent().show();
        if (business.hasClass("active") && scitech.hasClass("active") && general.hasClass("active") && trivia.hasClass("active") && sports.hasClass("active") && others.hasClass("active")) {
            none.addClass("active");

            art.removeClass("active");
            business.removeClass("active");
            scitech.removeClass("active");
            general.removeClass("active");
            trivia.removeClass("active");
            sports.removeClass("active");
            others.removeClass("active");
        }
    }
});

business.on("click", function () {
    if (business.hasClass("active")) {
        business.removeClass("active");
        $(".container").find(".card-business").parent().css("display", "none");
        check();
    } else {
        business.addClass("active");

        $(".container").find(".card-business").parent().show();
        if (art.hasClass("active") && scitech.hasClass("active") && general.hasClass("active") && trivia.hasClass("active") && sports.hasClass("active") && others.hasClass("active")) {
            none.addClass("active");

            art.removeClass("active");
            business.removeClass("active");
            scitech.removeClass("active");
            general.removeClass("active");
            trivia.removeClass("active");
            sports.removeClass("active");
            others.removeClass("active");
        }
    }
});

scitech.on("click", function () {
    if (scitech.hasClass("active")) {
        scitech.removeClass("active");
        $(".container").find(".card-scitech").parent().css("display", "none");
        check();
    } else {
        scitech.addClass("active");

        $(".container").find(".card-scitech").parent().show();
        if (art.hasClass("active") && business.hasClass("active") && general.hasClass("active") && trivia.hasClass("active") && sports.hasClass("active") && others.hasClass("active")) {
            none.addClass("active");

            art.removeClass("active");
            business.removeClass("active");
            scitech.removeClass("active");
            general.removeClass("active");
            trivia.removeClass("active");
            sports.removeClass("active");
            others.removeClass("active");
        }
    }
});

general.on("click", function () {
    if (general.hasClass("active")) {
        general.removeClass("active");
        $(".container").find(".card-general").parent().css("display", "none");
        check();
    } else {
        general.addClass("active");

        $(".container").find(".card-general").parent().show();
        if (art.hasClass("active") && business.hasClass("active") && scitech.hasClass("active") && trivia.hasClass("active") && sports.hasClass("active") && others.hasClass("active")) {
            none.addClass("active");

            art.removeClass("active");
            business.removeClass("active");
            scitech.removeClass("active");
            general.removeClass("active");
            trivia.removeClass("active");
            sports.removeClass("active");
            others.removeClass("active");
        }
    }
});

trivia.on("click", function () {
    if (trivia.hasClass("active")) {
        trivia.removeClass("active");
        $(".container").find(".card-trivia").parent().css("display", "none");
        check();
    } else {
        trivia.addClass("active");

        $(".container").find(".card-trivia").parent().show();
        if (art.hasClass("active") && business.hasClass("active") && scitech.hasClass("active") && general.hasClass("active") && sports.hasClass("active") && others.hasClass("active")) {
            none.addClass("active");

            art.removeClass("active");
            business.removeClass("active");
            scitech.removeClass("active");
            general.removeClass("active");
            trivia.removeClass("active");
            sports.removeClass("active");
            others.removeClass("active");
        }
    }
});

sports.on("click", function () {
    if (sports.hasClass("active")) {
        sports.removeClass("active");
        $(".container").find(".card-sports").parent().css("display", "none");
        check();
    } else {
        sports.addClass("active");

        $(".container").find(".card-sports").parent().show();
        if (art.hasClass("active") && business.hasClass("active") && scitech.hasClass("active") && general.hasClass("active") && trivia.hasClass("active") && others.hasClass("active")) {
            none.addClass("active");

            art.removeClass("active");
            business.removeClass("active");
            scitech.removeClass("active");
            general.removeClass("active");
            trivia.removeClass("active");
            sports.removeClass("active");
            others.removeClass("active");
        }
    }
});

others.on("click", function () {
    if (others.hasClass("active")) {
        others.removeClass("active");
        $(".container").find(".card-others").parent().css("display", "none");
        check();
    } else {
        others.addClass("active");

        $(".container").find(".card-others").parent().show();
        if (art.hasClass("active") && business.hasClass("active") && scitech.hasClass("active") && general.hasClass("active") && trivia.hasClass("active") && sports.hasClass("active")) {
            none.addClass("active");

            art.removeClass("active");
            business.removeClass("active");
            scitech.removeClass("active");
            general.removeClass("active");
            trivia.removeClass("active");
            sports.removeClass("active");
            others.removeClass("active");
        }
    }
});

$(".delete").click(function (){
    $(this).parent().parent().parent().hide();
})