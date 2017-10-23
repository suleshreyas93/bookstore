var express = require("express");
var router = express.Router();
var Books = require("../model/books")

//Get Books
router.get("/",function(req,res){
    Books.getBooks(function(err,books){
        if(err)
        {
            throw err;
        }
        res.json(books)
    })
})

module.exports = router;