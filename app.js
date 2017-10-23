var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//Init app
var app = express();

//Connect to database
mongoose.connect("mongodb://localhost/bookstore");
var db = mongoose.connection;

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//Configure Routes
var configRoutes = require("./routes");
configRoutes(app);

app.listen(3000, function(){
    console.log("Server running on port 3000...");
});
