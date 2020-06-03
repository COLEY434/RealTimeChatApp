angular.module('chatApp')
.component('testCase', {
    templateUrl: "Components/DisplayUsersTemplate.html",
    controller: function displayUsersComponent($http, $window){      
        var vm = this
        vm.name = "Collins"
        vm.users = []
        vm.token = $window.localStorage.getItem("token")
        
        $http.defaults.headers.common.Authorization = 'Bearer ' + vm.token;
        $http.get('https://localhost:5001/api/users/get-users')
        .then(function(res){
            var users = res.data.allUsers
            users.forEach(user => {
                vm.users.push(user)
            });
            console.log(vm.users)
           
            
        })
        .catch((err) => console.log(err))
        

        vm.createChat = function(userId){
            $http.defaults.headers.common.Authorization = 'Bearer ' + vm.token;
            $http.post('https://localhost:5001/api/Home/' + userId + '/create-chat')
                .then(function(res){
                    if(res.data.success){
                        $window.location.href = "#!/chat/" + res.data.id
                        
                    }
                    alert("Something went wrong creating your chat")
                    
                }, (err) => console.log(err))
        
        }
}
})


