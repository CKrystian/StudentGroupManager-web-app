angular.module('app').controller('registerController',
    ['$scope', '$rootScope', '$location', 'registerService', '$log',
        function ($scope, $rootScope, $location, registerService, $log) {

            $scope.register = function() {
                var test = "nic";

                registerService.register($scope.email, $scope.firstName, $scope.lastName, $scope.password).then(function (response) {
                    $log.info(response);
                    //window.location.href = "index.html";
                    $rootScope.message = "Rejestracja przebiegła pomyślnie. Na twój adres został wysłany link aktywacyjny. Po aktywacji będziesz mógł się zalogować";
                    $rootScope.isSuccess = true;
                    $location.path("/login");
                });
            }
        }]);