angular.module('app').controller('adminController',
    ['$scope', '$rootScope', '$location', 'loginService', '$cookies', '$http',
        function ($scope, $rootScope, $location, loginService, $cookies, $http) {


            $scope.logout = function(){
                $cookies.remove('credentials');
                $cookies.remove('userId');
                $http.defaults.headers.common['Authorization'] = null;
                window.location.href = "/frontend/#/login";
            }


        }]);