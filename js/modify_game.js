$("#header-div").on("click", function(event) {
    event.preventDefault();
    alert("Exiting this window will not save your game. Proceed?");
    window.location = "homepage.html";
})