angular.module('app').controller('registerController',
    ['$scope', '$rootScope', '$location', 'registerService', '$log',
        function ($scope, $rootScope, $location, registerService, $log) {

            $scope.register = function() {
                var test = "nic";

                registerService.register($scope.email, $scope.password, $scope.firstName, $scope.lastName).then(function (response) {
                    $log.info(response);
                    window.location.href = "index.html";
                });
            }
        }]);