var genreRoutes = require("./genre");
var bookRoutes = require("./books")

let constructorMethod = function(app){
    app.use("/genre",genreRoutes);
    app.use("/books",bookRoutes);
}

module.exports = constructorMethod;