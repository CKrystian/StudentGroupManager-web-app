angular.module('app').controller('facultiesController',
    ['$scope', 'facultiesService','$mdDialog',
        function ($scope, facultiesService, $mdDialog) {

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
                }, function() {
                    $scope.status = 'You decided to keep your debt.';
                });
            };
            $scope.delete = function (id) {
                facultiesService.delete('delete/', id).then(function (respnse) {
                    $log.info(respnse);
                    window.location.href = "admin_panel.html#/faculties.html";
                }, function (error) {
                    $log.error(error);

                });
            }
            $scope.edit = function () {
                facultiesService.edit('update').then(function (response) {
                    $log.info(response);

                }, function (error) {
                    $log.info(error);

                })

            }
            this.loadAllFaculties();
        }]);