angular.module('app').controller('classDatesController',
    ['$scope', '$rootScope', '$location', 'facultyService', '$log', 'userGroupService', '$cookies',
        function ($scope, $rootScope, $location, facultyService, $log, userGroupService, $cookies) {

            var self = this;

            self.classDates = [];
            self.userGroups = [];
            self.events = [];

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
                var startDate = moment(self.classDateDateStart);
                var startTime = moment(self.classDateTimeStart.value).utc();
                var endDate = moment(self.classDateDateEnd);
                var endTime = moment(self.classDateTimeEnd.value).utc();
                    var classDate = {
                        startDate : startDate.set({'hour' : startTime.get('hour'), 'minute' : startTime.get('minute')}),
                        endDate : endDate.set({'hour' : endTime.get('hour'), 'minute' : endTime.get('minute')}),
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