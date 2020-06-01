angular.module('chatApp.Login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/login', {
        templateUrl: 'Login/Login.html',
        controller: 'LoginController'
    })
}])
.controller('LoginController', [function() {
    
}])