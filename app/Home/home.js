angular.module('chatApp.Home', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: 'Home/home.html',
        controller: 'HomeController'
    })
}])
.controller('HomeController', [function($scope){

    // $scope.signalrSourceUrl = "lib/@microsoft/signalr/dist/browser/signalr.min.js"
    // $scope.signalrFileUrl = "signalr.js"
    //   $
    // $scope.Init = function(){
    //     $("<script>").attr({src: $scope.signalrSourceUrl}).appendTo("body");
    //     $("<script>").attr({src: $scope.signalrFileUrl}).appendTo("body");
    // }
    
    // $scope.Init()

   $scope.alert("homecontroller")
}])