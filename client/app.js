var myApp = angular.module("myBookStoreApp",["ngRoute"]);

myApp.config(function($routeProvider){
    $routeProvider.when("/",{
        controller:"BooksController",
        templateUrl:"views/books.html"
    })
    .when("/viewbooks",{
        controller:"BooksController",
        templateUrl:"views/books.html"
    })
    .when("/details/:id",{
        controller:"BooksController",
        templateUrl:"views/book_details.html"
    })
    .when("/books/add",{
        controller : "BooksController",
        templateUrl : "views/add_book.html"
    })
    .when("/books/edit/:id",{
        controller : "BooksController",
        templateUrl : "views/edit_book.html"
    })
    .otherwise({
        redirectTo : "/"
    })
})