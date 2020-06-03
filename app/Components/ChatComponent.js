angular.module('chatPane', ['ngRoute'])
// .component('chatPane', {
//     templateUrl: "Components/ChatTemplate.html",
    
    
// })

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/chat/:id', {
        templateUrl: 'Components/ChatTemplate.html',
        controller: 'ChatController'
    })
}])

.controller('ChatController', ['$scope','$window', '$http', '$routeParams', function($scope, $window, $http, $routeParams){

    console.log($routeParams)
    $scope.token = $window.localStorage.getItem("token")
    $window.location.href = '#!/chat/' + $routeParams.id
        
        $http.get('https://localhost:5001/api/Home/Chat/' + $routeParams.id)
            .then((res) => {
                console.log(res)
                if(res.data.success){
                    $scope.chat = res.data.chat
                }
               
            }, (err) => console.log(err))

      

    const connection = new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:5001/chatHub", {accessTokenFactory: () => $scope.token})
        .configureLogging(signalR.LogLevel.Information)
        .build();
                      
    connection.onclose(async () => {
        
    });
            
    connection.on("DisplayAlert", function(){
        alert("Connected")
    })
    connection.start().then(() => console.log("connected")).catch(() => alert("Didnt connect"));
            
        
      
    }])