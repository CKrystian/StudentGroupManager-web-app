angular.module('app').controller('memberController',
    ['$scope', '$location' ,'userGroupService', 'userService',
        function ($scope, $location, userGroupService, userService) {


            this.loadAllGroup = function() {



                userGroupService.loadAllGroup('all').then(function (response) {
                    $scope.data = response;
                    $log.info(response);
                }, function (error) {
                    $log.error(error);

                })
            }


            this.loadAllGroup();
        }]);