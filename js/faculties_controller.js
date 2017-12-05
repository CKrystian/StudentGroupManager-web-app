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
            $scope.delete = function (id) {
                facultiesService.delete('delete/', id).then(function (respnse) {
                    $log.info(respnse);
                }, function (error) {
                    $log.error(error);

                });
            }

            this.loadAllFaculties();
        }]);