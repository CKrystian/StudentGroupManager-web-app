angular.module('app').controller('modulesController',
    ['$scope', 'modulesService', '$mdDialog',
        function ($scope, modulesService, $mdDialog) {

            $scope.data;

            this.loadAllModules = function() {


                modulesService.loadModules('all').then(function (response) {
                    $scope.data = response;
                    $log.info(response);
                }, function (error) {
                    $log.error(error);

                });
            }
            $scope.edit = function () {
                modulesService.edit($scope.id,$scope.name,$scope.faculty_id).then(function (response) {
                    $scope.data = response;
                    $log.info(response);
                    
                }), function (error) {
                    $log.info(error);

                }
                
            }
            $scope.showConfirm = function(ev,id) {
                var confirm = $mdDialog.confirm()
                    .title('Czy chcesz wybrany element?')
                    .textContent('Wybrany przedmiot zostanie usunięty')
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
            $scope.showPrompt = function(ev,id, name, faculty_id) {

                var confirm = $mdDialog.prompt()
                    .title('Edytuj przedmiot')
                    .textContent('')
                    .placeholder('Nazwa przedmiotu')
                    .ariaLabel('Dog name')
                    .initialValue('')
                    .targetEvent(ev)
                    .ok('Potwierdź')
                    .cancel('Cofnij');

                $mdDialog.show(confirm).then(function(result) {
                    $scope.name = result;
                    $scope.id = id;

                    $scope.faculty.id = faculty_id;
                    $scope.edit();
                }, function() {
                    $scope.status = 'You didn\'t name your dog.';
                });
            };



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