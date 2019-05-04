// Setup
var express = require("express");
var path = require("path");

var profiles = require("./app/data/friends.js")

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Starter

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

app.get("/api/friends", function (req, res) {
    return res.json(profiles);
});

app.get("/api/friends/:profile", function (req, res) {
    var chosen = req.params.profile;

    console.log(chosen);

    for (var i = 0; i < profiles.length; i++) {
        if (chosen === profiles[i].routeName) {
            return res.json(profiles[i]);
        }
    }

    return res.json(false);
});

app.post("/api/friends", function (req, res) {

    var newProfile = req.body;

    newProfile.routeName = newProfile.name.replace(/\s+/g, "").toLowerCase();

    console.log(newProfile);

    profiles.push(newProfile);

    res.json(newProfile);
});

// Server start listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});