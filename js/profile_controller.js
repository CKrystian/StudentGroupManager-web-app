angular.module('app').controller('profileController',
    ['$scope', '$cookies' ,'userService',
        function ($scope, $cookies, userService) {

            var id = $cookies.get('userId');

            $scope.current = function () {
                userService.currentUser(id).then(function(response){
                    $scope.user = response;
                    console.log(response);
                })

            }

            $scope.current();

            $scope.editUser = function () {
                userService.editUser($scope.user.id,$scope.user.email,$scope.firstName, $scope.lastName).then(function (resp) {
                    $log.info(resp);
                    alert('done');
                    window.location.href = "admin_panel.html#/profile.html";


                })

            }
        }]);
