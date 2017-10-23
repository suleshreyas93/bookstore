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