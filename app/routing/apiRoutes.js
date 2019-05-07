var profiles = require("../data/friends.js")

module.exports = function (app) {

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
};