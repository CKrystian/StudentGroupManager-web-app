angular.module('app').controller('userController',
    ['$scope', 'userService',
        function ($scope, userService) {

    $scope.data;

            this.loadAllUserList = function() {


                userService.loadUsers('all').then(function (response) {
                    $scope.data = response;
                    $log.info(response);
                }, function (error) {
                    $log.error(error);

                });
            }

            this.loadAllUserList();
        }]);
