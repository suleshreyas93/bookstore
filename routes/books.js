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

//Get Book By Id
router.get("/:_id",function(req,res){
    Books.getBookById(req.params._id,function(err,book){
        if(err)
        {
            throw err;
        }
        res.json(book);
    })
})

module.exports = router;