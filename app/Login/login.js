angular.module('chatApp.Login', ['ngRoute', 'tokenService'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/login', {
        templateUrl: 'Login/Login.html',
        controller: 'LoginController'
    })
}])
.controller('LoginController', ['$scope','$window','$http', function($scope, $window, $http) {
   
    $scope.submit = function(user){    
               
              $http.post('https://localhost:5001/api/auth/login', user)
                .then(function(res){
                    console.log(res)
                    
                    $window.localStorage.setItem("UserId", res.data.userId)
                    $window.localStorage.setItem("token", res.data.token)
                    $window.location.href = '#!/home'
                    
                }, () => console.log())
                
          }
    
}])