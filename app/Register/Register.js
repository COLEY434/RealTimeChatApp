angular.module('chatApp.Register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/register', {
        templateUrl: 'Register/register.html',
        controller: 'RegisterController'
    })
}])

.controller('RegisterController', ['$scope','$window', '$http', function($scope, $window, $http){

      $scope.register = function(user){
        
        $http.post('https://localhost:5001/api/auth/register', user)
            .then((res) => {
                console.log(res)
              
                $window.localStorage.setItem("UserId", res.data.userId)
                $window.localStorage.setItem("token", res.data.token)
                $window.location.href = '#!/'
            }, (err) => console.log(err))
            
      }

     

    
}])