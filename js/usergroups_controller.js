angular.module('app').controller('userGroupController',
    ['$scope', '$rootScope', '$location', 'userGroupService', 'userService', '$log',
        function ($scope, $rootScope, $location, userGroupService, userService, $log) {
    
                $scope.add = function () {

                        userGroupService.add($scope.groupId, $scope.userId).then(function (response) {
                            $log.info(response);
                            alert("Pomyślnie dodano");
                        });
                }
               $scope.loadAllGroup = function() {


                   userGroupService.loadAllGroup('all').then(function (response) {
                       $scope.groups = response;
                       $log.info(response);
                   }, function (error) {
                       $log.error(error);

                   });
               }
            $scope.loadAllGroup();

                $scope.loadUsers = function () {
                    userService.loadUsers('all').then(function (response) {
                        $scope.users = response;
                        $log.info(response);

                    }, function (error){
                        $log.error(error);
                    }
                    );
                }
             $scope.loadUsers();
        }]);