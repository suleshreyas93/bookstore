var express = require("express");
var router = express.Router();
var Genre = require("../model/genre")

//Get Home Page
router.get("/",function(req,res){
    Genre.getGenres(function(err,genres){
        if(err)
        {
            throw err;
        }
        res.json(genres);
    })
})

module.exports = router;