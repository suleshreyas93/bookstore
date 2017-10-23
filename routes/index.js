var homeRoutes = require("./home");

let constructorMethod = function(app){
    app.use("/",homeRoutes);
}

module.exports = constructorMethod;