angular.module('app').controller('userController',
    ['$scope', '$cookies','userService',
        function ($scope, $cookies, userService) {

            $scope.data;

            var id = $cookies.get("userId");


            this.loadAllUserList = function() {


                userService.loadUsers('all').then(function (response) {
                    $scope.data = response;
                    $log.info(response);
                }, function (error) {
                    $log.error(error);

                });
            }
            this.currentUser = function () {
                userService.currentUser(id).then(function (response) {
                    $scope.current = response;
                    $log.info(response);
                }, function (error) {
                    $log.error(error);

                });

                }



            $scope.delete = function (id) {
                userService.delete('delete/', id).then(function (respnse) {
                    $log.info(respnse);
                }, function (error) {
                    $log.error(error);

                });
            }
            this.loadAllUserList();
            this.currentUser();
        }]);
