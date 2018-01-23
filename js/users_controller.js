angular.module('app').controller('userController',
    ['$scope', '$cookies', '$location','userService', '$mdDialog',
        function ($scope, $cookies, $location, userService, $mdDialog ) {

            $scope.data;

            var id = $cookies.get('userId');


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

            $scope.showConfirm = function(ev,id) {
                var confirm = $mdDialog.confirm()
                    .title('Czy chcesz usunąć wybrany element?')
                    .textContent('Wybrany użytkownik zostanie usunięty')
                    .ariaLabel('Lucky day')
                    .targetEvent(ev)
                    .ok('Tak')
                    .cancel('Nie');

                $mdDialog.show(confirm).then(function() {
                    $scope.delete(id);
                    window.location.href = "admin_panel.html#/users";
                }, function() {
                    $scope.status = 'You decided to keep your debt.';
                });
            };

            $scope.delete = function (id) {
                userService.delete('delete/', id).then(function (respnse) {
                    $log.info(respnse);

                }, function (error) {
                    $log.error(error);

                });
            }
            $scope.showAdvanced = function(ev) {
                $mdDialog.show({
                    controller: DialogController,
                    templateUrl: '#/profile.html',
                    targetEvent: ev,
                    clickOutsideToClose:true,
                     // Only for -xs, -sm breakpoints.
                })
                    .then(function(answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
            }
            function DialogController($scope, $mdDialog) {
                $scope.hide = function() {
                    $mdDialog.hide();
                };

                $scope.cancel = function() {
                    $mdDialog.cancel();
                };

                $scope.answer = function(answer) {
                    $mdDialog.hide(answer);
                };
            }


            $scope.editUser = function () {
                userService.editUser($scope.id,$scope.user.email,$scope.firstName, $scope.lastName).then(function (resp) {
                    $log.info(resp);
                    alert('done');
                    window.location.href = "admin_panel.html#/profile.html";


                })

            }
            this.loadAllUserList();
            this.currentUser();
        }]);
