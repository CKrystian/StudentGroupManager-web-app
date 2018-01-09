angular.module('app').controller('facultyController',
    ['$scope', '$rootScope', '$location', 'facultyService', '$log',
        function ($scope, $rootScope, $location, facultyService, $log) {

            $scope.add = function() {

                facultyService.add($scope.code,$scope.name,$scope.type).then(function (response) {
                    $log.info(response);
                    window.location.href = "admin_panel.html#/faculty";
                    alert('done');
                });
            }
        }]);