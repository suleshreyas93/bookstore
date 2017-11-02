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
        console.log("here");
        console.log(books);
     return res.json(books);
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

//Add Book
router.post("/",function(req,res){
    var book = req.body;
    Books.addBook(book,function(err,book){
        if(err)
        {
            throw err;
        }
        res.json(book);
    })
})

router.put("/:_id",function(req,res){
    var id = req.params._id;
    var book = req.body;
    Books.updateBook(id,book,{},function(err,book){
        if(err)
        {
            throw err;
        }
        res.json(book);
    })
})

//Delete Book
router.delete("/:_id",function(req,res){
    var id = req.params._id;
    Books.deleteBook(id,function(err,book){
        if(err)
        {
            throw err;
        }
        res.json(book);
    })
})

module.exports = router;