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

.controller('ChatController', ['$scope','$window', '$http', '$routeParams', function($scope,$window, $http, $routeParams){

    console.log($routeParams)
    this.token = $window.localStorage.getItem("token")

   
    
    this.messages = []


    $http.defaults.headers.common.Authorization = 'Bearer ' + this.token;
        $http.get('https://localhost:5001/api/chat/' + $routeParams.id)
            .then((res) => {
                console.log(res)
                if(res.data.success){
                    var messages = res.data.messages
                    messages.forEach(message => {
                        this.messages.push(message)
console.log(this.messages)
                        this.sendMessage(this.messages)
                    });
                }
               
            }, (err) => console.log(err))

     
            // ctrl.sendMessage = function(message){
            //     alert(message)
        
                // $http.defaults.headers.common.Authorization = 'Bearer ' + $scope.token;
                // $http.post('https://localhost:5001/api/chat/' + message.chatId +'/send-message', message.text)
                //     .then((res) => {
                //         console.log(res)
                        
                       
                //     }, (err) => console.log(err))
            //}




    const connection = new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:5001/chatHub", {accessTokenFactory: () => this.token})
        .configureLogging(signalR.LogLevel.Information)
        .build();
    
        var connectionId = ''
    connection.onclose(async () => {
        
    });
            
    // connection.on("retrieveToken", function(_connectionId){
    //     alert("connected ", _connectionId)
    //     connectionId = _connectionId
    // })

    connection.on("ReceiveMessage", function(message){
        var message = document.createElement("div")

           var header = document.createElement("header")
           header.appendChild(document.createTextNode(message.name))

           var p = document.createElement("p")
           p.appendChild(document.createTextNode(message.text))

           var footer = document.createElement("footer")
           footer.appendChild(document.createTextNode(message.timeStamp))
           

           message.appendChild(header)
           message.appendChild(p)
           message.appendChild(footer)

           var chatBody = document.getElementById('#chat-body')
           chatBody.append(message)
    })
    connection.start().then(() => console.log("connected")).catch(() => alert("Didnt connect"));
            
        
    
      
    }])