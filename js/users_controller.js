angular.module('app').controller('userController',
    ['$scope', 'userService',
        function ($scope, userService) {

    this.data;

            this.loadAllUserList = function() {


                userService.loadUsers('all').then(function (response) {
                    this.data = response;
                    $log.info(response);
                }, function (error) {
                    $log.error(error);

                });
            }

            this.loadAllUserList();
        }]);
