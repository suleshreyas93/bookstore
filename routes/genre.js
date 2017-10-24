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

//Update Genre
router.put("/:_id",function(req,res){
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id,genre,{},function(err,genre){
        if(err)
        {
            throw err;
        }
        res.json(genre);
    })
})

//Delete Genre
router.put("/:_id",function(req,res){
    var id = req.params._id;
    Genre.deleteGenre(id,function(err,genre){
        if(err)
        {
            throw err;
        }
        res.json(genre);
    })
    
})



module.exports = router;