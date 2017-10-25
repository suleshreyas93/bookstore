var myApp = angular.module("myBookStoreApp",[]);


/*
    $scope binds the controller to the view. So we can pass things back and forth between them.
    Here we have bind books with scope. Hence we can access all books in the view with just {{books}}

    $http to make get and post requests.

    $location deals with redirection

    $routeParams will help to get variable values from forms. 
*/
myApp.controller("BooksController",["$scope", "$http", "$location", "$routeParams",function($scope,$http,$location,$routeParams){
    $scope.getBooks = function(){
        $http.get("/books",function(response){
            $scope.books = response;
        })
    }
}])