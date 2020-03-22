const port = 9090;
const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.get("/create_game", function(req, res) {
    res.render("pages/create_game");
});

app.get("/homepage", function(req, res) {
    res.render("pages/homepage");
});

app.get("/", function(req, res) {
    res.render("pages/login_and_register");
});

app.get("/login_and_register", function(req, res) {
    res.render("pages/login_and_register");
});

app.get("/modify_game", function(req, res) {
    res.render("pages/modify_game");
});

app.get("/play_game", function(req, res) {
    res.render("pages/play_game");
});

app.get("/view_games", function(req, res) {
    res.render("pages/view_games");
});

app.get("/view_games_admin", function(req, res) {
    res.render("pages/view_games_admin");
});

app.get("/view_leaderboard", function(req, res) {
    res.render("pages/view_leaderboard");
});

app.get("/view_profile_admin", function(req, res) {
    res.render("pages/view_profile_admin");
});

app.get("/view_profile_admin_user", function(req, res) {
    res.render("pages/view_profile_admin_user");
});

app.get("/view_profile_self", function(req, res) {
    res.render("pages/view_profile_self");
});

app.get("/view_profile_user", function(req, res) {
    res.render("pages/view_profile_user");
});

app.listen(port, function() {
    console.log("listening at http://localhost:" + port);
});