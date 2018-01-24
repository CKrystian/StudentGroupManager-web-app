angular.module('app').controller('groupListController',
    ['$scope', '$location' ,'userGroupService', '$mdDialog',
        function ($scope, $location, userGroupService, $mdDialog) {


            this.loadAllGroup = function() {



               userGroupService.loadAllGroup('all').then(function (response) {
                    $scope.data = response;
                    $log.info(response);
                }, function (error) {
                    $log.error(error);

                });
            }
            $scope.delete = function (id) {
                userGroupService.delete('delete/', id).then(function (respnse) {
                    $log.info(respnse);
                }, function (error) {
                    $log.error(error);

                });
            }
            $scope.edit = function () {
                userGroupService.edit($scope.id,$scope.name,$scope.module).then(function (response) {
                    $log.info(response);

                }, function (error) {
                    $log.info(error);

                })

            }
            $scope.showConfirm = function(ev,id) {
                var confirm = $mdDialog.confirm()
                    .title('Czy chcesz wybrany element?')
                    .textContent('Wybrana grupa zostanie usunięty')
                    .ariaLabel('Lucky day')
                    .targetEvent(ev)
                    .ok('Tak')
                    .cancel('Nie');

                $mdDialog.show(confirm).then(function() {
                    $scope.delete(id);

                }, function() {
                    $scope.status = 'You decided to keep your debt.';
                });
            };
            $scope.showPrompt = function(ev,id, name, module) {

                var confirm = $mdDialog.prompt()
                    .title('Zmiana nazwy grupy')
                    .textContent('')
                    .placeholder('Nazwa grupy')
                    .ariaLabel('Dog name')
                    .initialValue('')
                    .targetEvent(ev)

                    .ok('Potwierdź')
                    .cancel('Cofnij');

                $mdDialog.show(confirm).then(function(result) {
                    $scope.module = { id : module};
                    $scope.name = result;
                    $scope.id = id;

                    $scope.edit();

                });
            }
            $scope.showAdvanced = function(ev,id) {
                $mdDialog.show({
                    controller: DialogController,
                    templateUrl: 'memberGroupList.html',
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
            this.loadAllGroup();
        }]);