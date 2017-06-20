var express = require("express");
var app = express();
app.use(express.static("static"));
app.listen(7000, function(err){
    console.log("Application is listening on port 7000", err);
});