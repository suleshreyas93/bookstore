var myApp = angular.module("myBookStoreApp");


/*
    $scope binds the controller to the view. So we can pass things back and forth between them.
    Here we have bind books with scope. Hence we can access all books in the view with just {{books}}

    $http to make get and post requests.

    $location deals with redirection

    $routeParams will help to get variable values from forms. 
*/
myApp.controller("BooksController",["$scope", "$http", "$location", "$routeParams",function($scope,$http,$location,$routeParams){
    console.log("BooksController loaded...")
    $scope.getBooks = function(){
        $http.get("/books").then(function(response){
            $scope.books = response.data
        })
    }

    $scope.getBook = function(){
        let id = $routeParams.id;
        $http.get("/books/details/"+id).then(function(response){
            $scope.book = response.data
        })
    }

    $scope.addBook = function(){
        
        $http.post("/books/add",$scope.book).then(function(response){
            console.log("Hello")
            window.location.href = "/#!/books"
        })
    }

    
}])