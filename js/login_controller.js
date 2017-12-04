angular.module('app').controller('LoginController',
    ['$scope', '$rootScope', '$location', 'loginService', '$log', '$cookies', '$http',
        function ($scope, $rootScope, $location, loginService, $log, $cookies, $http) {

            $scope.login = function() {
                var test = "nic";

                loginService.login($scope.username,$scope.password).then(function (response) {
                    $log.info(response);
                    var authdata = btoa($scope.username + ":" + $scope.password);
                    $cookies.put('credentials',authdata);
                    var cred = $cookies.get('credentials');
                    $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
                    window.location.href = "user_panel.html";
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
        }]);
