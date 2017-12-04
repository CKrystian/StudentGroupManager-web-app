angular.module('app').controller('modulesController',
    ['$scope', 'modulesService',
        function ($scope, modulesService) {

            $scope.data;

            this.loadAllModules = function() {


                modulesService.loadModules('all').then(function (response) {
                    $scope.data = response;
                    $log.info(response);
                }, function (error) {
                    $log.error(error);

                });
            }

            this.loadAllModules();
        }]);