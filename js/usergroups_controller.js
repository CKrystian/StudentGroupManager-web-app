angular.module('app').controller('userGroupController',
    ['$scope', '$rootScope', '$location', 'userGroupService', 'userService', '$log',
        function ($scope, $rootScope, $location, userGroupService, userService, $log) {

               $scope.loadAllGroup = function() {


                   userGroupService.loadAllGroup('all').then(function (response) {
                       $scope.data = response;
                       $log.info(response);
                   }, function (error) {
                       $log.error(error);

                   });
               }
            $scope.loadAllGroup();
        }]);