angular.module('app').controller('groupController',
    ['$scope', '$rootScope', '$location', 'groupService' , 'modulesService', '$log',
        function ($scope, $rootScope, $location, groupService, modulesService, $log) {

            $scope.add = function() {

                groupService.add($scope.name,$scope.module).then(function (response) {
                    $log.info(response);
                    window.location.href = "admin_panel.html#/groups";
                    alert("done");
                });
            }
            $scope.show = function () {

                modulesService.loadModules("all").then(function (response) {
                    $scope.data = response;
                })

            }

            $scope.show();
        }]);