angular.module('app').controller('classDatesController',
    ['$scope', '$rootScope', '$location', 'facultyService', '$log', 'userGroupService', '$cookies',
        function ($scope, $rootScope, $location, facultyService, $log, userGroupService, $cookies) {

            var self = this;

            self.classDates = [];
            self.userGroups = [];

            userGroupService.getUserGroups($cookies.get("userId")).then(function (response) {
                self.userGroups = response;
            });


            self.classDateTimeStart = {
                value: new Date(1970, 0, 1, 8, 0, 0)
            };
            self.classDateTimeEnd = {
                value: new Date(1970, 0, 1, 8, 0, 0)
            };

            self.addClassDateToList = function () {
                var startDate = moment(self.classDateDateStart).format("DD-MM-YYYY");
                var startTime = moment(self.classDateTimeStart.value).format("HH:mm:SS");
                var endDate = moment(self.classDateDateEnd).format("DD-MM-YYYY");
                var endTime = moment(self.classDateTimeEnd.value).format("HH:mm:SS");
                    var classDate = {
                        startDate : startDate + " " + startTime,
                        endDate : endDate + " " + endTime,
                        classRoom : self.classRoom,
                        group : {
                            id: self.userGroup
                        }
                    };

                    self.classDates.push(classDate);
                };

                self.saveClassDates = function (classDates) {
                    userGroupService.saveClassDates(classDates).then(function (response) {
                        var costam = response;
                    })
                }

        }]);