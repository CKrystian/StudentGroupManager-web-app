angular.module('app').controller('facultiesController',
    ['$scope', '$location' , 'facultiesService','$mdDialog', '$window',
        function ($scope, $location, facultiesService, $mdDialog, $Window) {

            $scope.data;

            this.loadAllFaculties = function() {


                facultiesService.loadFaculties('all').then(function (response) {
                    $scope.data = response;
                    $log.info(response);
                }, function (error) {
                    $log.error(error);

                });
            }
            $scope.showConfirm = function(ev,id) {
                var confirm = $mdDialog.confirm()
                    .title('Czy chcesz wybrany element?')
                    .textContent('Wybrany kierunek studiów zostanie usunięty')
                    .ariaLabel('Lucky day')
                    .targetEvent(ev)
                    .ok('Tak')
                    .cancel('Nie');

                $mdDialog.show(confirm).then(function() {
                    $scope.delete(id);
                    window.location.href = "admin_panel.html#/faculties";
                }, function() {
                    $scope.status = 'You decided to keep your debt.';
                });
            };
            $scope.delete = function (id) {
                facultiesService.delete('delete/', id).then(function (respnse) {
                    $log.info(respnse);
                    window.location.href = "admin_panel.html#/faculties";
                }, function (error) {
                    $log.error(error);

                });
            }
            $scope.edit = function () {
                facultiesService.edit($scope.id, $scope.code, $scope.name, $scope.type).then(function (resp) {
                    $log.info(resp);
                    window.location.href = "admin_panel.html#/faculties";



                })

            }
            $scope.showPrompt = function(ev,id, code, type) {

                var confirm = $mdDialog.prompt()
                    .title('Zmiana nazwy kierunku')
                    .textContent('')
                    .placeholder('Nazwa kierunku')
                    .ariaLabel('Dog name')
                    .initialValue('')
                    .targetEvent(ev)

                    .ok('Potwierdź')
                    .cancel('Cofnij');

                $mdDialog.show(confirm).then(function(result) {
                    $scope.name = result;
                    $scope.id = id;
                    $scope.code = code;
                    $scope.type = type;
                    $scope.edit();

                }, function() {
                    $scope.status = 'You didn\'t name your dog.';
                });
            };
            this.loadAllFaculties();
        }]);