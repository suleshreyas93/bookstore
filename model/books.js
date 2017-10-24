var mongoose = require("mongoose");

//Book Schema
var bookSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    genre : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    author : {
        type : String,
        required : true
    },
    publisher : {
        type : String
    },
    pages : {
        type : String
    },
    image_url : {
        type : String
    },
    buy_url : {
        type : String
    }

});

var Books = module.exports = mongoose.model("Books",bookSchema);

//Get All Books
module.exports.getBooks = function(callback)
{
    Books.find(callback);
}

//Get Book By Id
module.exports.getBookById = function(book_id,callback)
{
    Books.findById(book_id,callback);
}

//Add Book
module.exports.addBook = function(book,callback){
    Books.create(book,callback);
}

//Update Book
module.exports.updateBook = function(id,book,option,callback)
{
    var query = {_id : id};
    var updatedBook = {
        title : book.title,
        genre : book.genre,
        description : book.description,
        author : book.author,
        publisher : book.publisher,
        pages : book.pages,
        image_url : book.image_url,
        book_url : book.buy_url
    }

    Books.findOneAndUpdate(query,updatedBook,option,callback);
}

module.exports.deleteBook = function(id,callback)
{
    var deleteQuery = {_id : id};
    Books.remove(deleteQuery,callback);
}