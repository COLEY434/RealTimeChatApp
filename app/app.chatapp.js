'use strict';

angular.module('chatApp', [
    'ngComponentRouter',
    'ngRoute',
    'defautTemp',
    'chatPane',
    'paneComponent',
    
    'chatApp.Login',
    'chatApp.Register',
    // 'chatApp.Home'

])

.config(['$locationProvider', function($locationProvider){
    
    // $routeProvider.when('/home',{
    //     template: '<home-page></home-page>'
    // })
    // .otherwise({redirectTo: '/home'})

    $locationProvider.hashPrefix('!');
}])
.value('$routerRootComponent', 'chatApp')
.component('home', {
    templateUrl: 'Home/home.html',
    // $routeConfig: [
    //     {path: '!/...', name: 'ChatPage', component: 'defautTemp', useAsDefault: true},
    //     // {path: '/chat/:id', name: 'Chat', component: 'chatPage' }
    //   ]
  })
