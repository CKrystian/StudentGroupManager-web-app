angular.module('app').controller('classDatesDetailsController',
    ['$scope', '$rootScope', '$location', 'facultyService', '$log', 'userGroupService', '$cookies', '$routeParams',
        function ($scope, $rootScope, $location, facultyService, $log, userGroupService, $cookies, $routeParams) {

            var self = this;

            self.classDate = {};

            userGroupService.getClassDate($routeParams.id).then(function (response) {
                self.classDate = response;
                self.classDate.startDate = moment(self.classDate.startDate).format("DD-MM-YYYY HH:mm");
                self.classDate.endDate = moment(self.classDate.endDate).format("DD-MM-YYYY HH:mm");

                var students = [];
                self.classDate.group.members.forEach(function (member) {
                    if(member.roles.includes("USER_STUDENT")) {
                        students.push(member);
                    }
                });

                self.classDate.group.members = students;
            });


            self.addPresence = function (user) {
                userGroupService.addPresence(self.classDate.id, user_id).then(function (response) {
                    user.isPresent = true;
                    user.presenceId = response.id
                })
            };

            self.removePresence = function (user) {
                userGroupService.removePresence(user.presenceId).then(function (response) {
                    user.isPresent = false;
                })
            }

        }]);