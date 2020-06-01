'use strict';

angular.module('chatApp', [
    'ngRoute',
    'chatApp.Login',
    'chatApp.Register'

])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    $routeProvider.when('/home',{
        templateUrl: 'Home/home.html'
    })
    .otherwise({redirectTo: '/home'})

    $locationProvider.hashPrefix('!');
}])