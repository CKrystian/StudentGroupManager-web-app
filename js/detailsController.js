angular.module('app').controller('detailsController',
    ['$scope', '$routeParams' , 'userGroupService',
        function ($scope, $routeParams, userGroupService) {

             var id = $routeParams.id;

            $scope.getGroup = function () {
                userGroupService.getGroup(id).then(function (response) {
                    $scope.data = response;

                }).then(function (error) {
                    $log.error(error);

                })

            }
            $scope.getGroup();



        }]);