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



            $scope.delete = function (id) {
                modulesService.delete('delete/', id).then(function (respnse) {
                    $log.info(respnse);
                    window.location.href = "admin_panel.html#/modules";
                }, function (error) {
                    $log.error(error);

                });
            }
            this.loadAllModules();
        }]);