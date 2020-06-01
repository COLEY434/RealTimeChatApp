angular.module('chatApp.Register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/register', {
        templateUrl: 'Register/register.html',
        controller: 'RegisterController'
    })
}])

.controller('RegisterController', [function(){

}])