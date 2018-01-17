angular.module('app').controller('moduleController',
    ['$scope', '$rootScope', '$location', 'moduleService' , 'facultiesService', '$log',
        function ($scope, $rootScope, $location, moduleService, facultiesService, $log) {

            $scope.add = function() {

                moduleService.add($scope.name,$scope.faculty).then(function (response) {
                    $log.info(response);
                    window.location.href = "admin_panel.html#/modules";
                    alert("done");
                });
            }
            $scope.loadAllFaculties = function() {


               facultiesService.loadFaculties('all').then(function (response) {
                    $scope.data = response;
                    $log.info(response);
                }, function (error) {
                    $log.error(error);

                });
            }
            $scope.loadAllFaculties();
        }]);