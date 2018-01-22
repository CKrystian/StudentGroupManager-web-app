angular.module('app').controller('groupListController',
    ['$scope', 'userGroupService',
        function ($scope, userGroupService) {


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
                    window.location.href = "admin_panel.html#/group_list.html";
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
            this.loadAllGroup();
        }]);