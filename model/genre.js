var mongoose = require("mongoose");

//Create Genre Schema
var genreSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    dateOfCreation : {
        type : Date,
        default : Date.now
    }
});

var Genre = module.exports = mongoose.model("Genre",genreSchema);

//Get Genres
module.exports.getGenres = function(callback,limit)
{
    Genre.find(callback).limit(limit);
}