angular.module('app').controller('marksController',
    ['$scope', '$routeParams' , 'userService', 'userGroupService',
        function ($scope, $routeParams, userService, userGroupService) {

            var id = $routeParams.id;

            $scope.currentUser = function () {
                userService.currentUser(id).then(function (response) {
                    $scope.data = response;

                }).then(function (error) {
                    $log.error(error);

                })

            }
            $scope.currentUser();
            $scope.addInstance = function () {
                userGroupService.addInstance($scope.score, $scope.examines, id).then(function (response) {
                    $log.info(response);
                    alert('done');

                })
                
            }
            $scope.loadAllExamine = function () {
                userGroupService.loadAllExamine().then(function (response) {
                    $scope.examines = response;
                }).then(function (error) {
                    $log.error(error);
                })

            }

            $scope.loadAllExamine();
            $scope.getUserMarks = function () {
                userGroupService.getUserMarks(id).then(function (response) {
                    $scope.marks = response;

                }).then(function (error) {
                    $log.error(error);

                })

            }
            $scope.getUserMarks();
        }]);