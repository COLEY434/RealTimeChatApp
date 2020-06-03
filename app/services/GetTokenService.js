angular.module('tokenService', [])
.factory('Token', ['$window', function($window){
    
    return function(){
        return $window.localStorage.getItem("token")
    }
       
}])

