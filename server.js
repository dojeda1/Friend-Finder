// Setup
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Profiles
var profiles = [{
    name: "Bobert",
    photo: "https://i.pinimg.com/originals/15/64/01/1564012a2a780ee83de9cacbf2e0e7ba.jpg",

    q1: "1",
    q2: "1",
    q3: "1",
    q4: "1",
    q5: "1",
    q6: "1",
    q7: "1",
    q8: "1",
    q9: "1",
    q10: "1"
}];

// Starter

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

app.get("/api/profiles", function (req, res) {
    return res.json(profiles);
});

app.post("/survey", function (req, res) {

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