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

//Add genre
router.post("/",function(req,res){
    var genre = req.body;
    Genre.addGenre(genre,function(err,genre){
        if(err)
        {
            throw err;
        }
        res.json(genre);
    })
})

module.exports = router;