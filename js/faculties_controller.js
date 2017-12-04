angular.module('app').controller('facultiesController',
    ['$scope', 'facultiesService',
        function ($scope, facultiesService) {

            $scope.data;

            this.loadAllFaculties = function() {


                facultiesService.loadFaculties('all').then(function (response) {
                    $scope.data = response;
                    $log.info(response);
                }, function (error) {
                    $log.error(error);

                });
            }

            this.loadAllFaculties();
        }]);