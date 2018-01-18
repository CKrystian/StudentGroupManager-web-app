angular.module('app').controller('addUserController',
    ['$scope', '$rootScope', '$location', 'addUserService', '$log',
        function ($scope, $rootScope, $location, addUserService, $log) {

            $scope.add = function() {

                addUserService.add($scope.email, $scope.firstName, $scope.lastName, $scope.password, $scope.enabled).then(function (response) {
                    $log.info(response);
                    window.location.href = "admin_panel.html#/users ";
                    alert('done');
                });
            }
        }]);