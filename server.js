var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


var pop = "Pop!!!"

app.get("/", function (req, res) {
    return res.json(pop);
});



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});