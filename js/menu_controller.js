angular.module('app').controller('menuController',
    ['$scope', 'menuService', '$log',
        function ($scope, menuService, $log) {

        $scope.loadMenu = function () {
            menuService.loadMenu().then(function (response) {
                $scope.data = response;
                $log.info(response);
            }).then(function (error) {
                $log.info(error);

            })

        }
        $scope.loadMenu();
        }
]);