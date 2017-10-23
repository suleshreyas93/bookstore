var express = require("express");
var router = express.Router();

//Get Home Page
router.get("/",function(req,res){
    res.send("Hello World!");
})

module.exports = router;