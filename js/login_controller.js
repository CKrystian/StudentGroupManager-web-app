angular.module('app').controller('LoginController',
    ['$scope', '$rootScope', '$location', 'loginService', '$log', '$cookies', '$http',
        function ($scope, $rootScope, $location, loginService, $log, $cookies, $http) {

            $scope.isSuccess = $rootScope.isSuccess;
            $scope.message = $rootScope.message;


            $scope.login = function() {
                var test = "nic";

                loginService.login($scope.username,$scope.password).then(function (response) {
                    $log.info(response);
                    var authdata = btoa($scope.username + ":" + $scope.password);
                    $cookies.put('credentials',authdata);
                    delete $rootScope.message;
                    $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
                    var testt = isCurrentUserAdmin(response);
                    if(isCurrentUserAdmin(response)) {
                        window.location.href = "admin_panel.html";
                    } else {
                        window.location.href = "user_panel.html";
                    }
                }, function (error) {
                    $log.error(error);
                    alert("Niepoprawne dane logowania!")
                });
            }
            $scope.logout = function(){
                $cookies.remove('credentials');
                $http.defaults.headers.common['Authorization'] = null;
                alert("done")
                window.location.href = "index.html";
            }

            var isCurrentUserAdmin = function (user) {

                for(var role in user.roles) {
                    if(role.role === "USER_ADMIN") {
                        return true;
                    }
                }
                return false;

               var test = user.roles.includes({
                    role : "USER_ADMIN"
                })

            }
        }]);
