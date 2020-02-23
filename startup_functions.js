$("#email_login, #password_login").on("keypress", function() {
    let holder1 = $("#email_login").val().length;
    let holder2 = $("#password_login").val().length;

    if (holder1 !== 0 && holder2 !== 0 && $("#email_login").is(":valid")) {
        $("#submit_login").removeAttr("disabled");
    }
});

$("#email_login, #password_login").on("focus", function () {

    $("#login_box").removeClass();
    $("#login_box").addClass("col-sm-8");

    $("#register_box").removeClass();
    $("#register_box").addClass("col-sm-4");

});

$("#fname, #lname, #bday, #gender, #email_register, #password_register, #cpass").on("focus", function () {

    $("#login_box").removeClass();
    $("#login_box").addClass("col-sm-4");

    $("#register_box").removeClass();
    $("#register_box").addClass("col-sm-8");

});

$("#email_login, #password_login, #fname, #lname, #bday, #gender, #email_register, #password_register, #cpass").on("blur", function () {

    let holder1

    $("#login_box").removeClass();
    $("#login_box").addClass("col-sm-5");

    $("#register_box").removeClass();
    $("#register_box").addClass("col-sm-7");

});