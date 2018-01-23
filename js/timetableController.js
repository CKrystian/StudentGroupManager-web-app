angular.module('app').controller('timetableController',
    ['$scope', '$rootScope', '$location', 'facultyService', '$log', 'userGroupService', '$cookies',
        function ($scope, $rootScope, $location, facultyService, $log, userGroupService, $cookies) {

            var self = this;

            $scope.calendarView = 'week';
            $scope.viewDate = new Date();

            self.startDate = moment().startOf('week');
            self.endDate = moment().endOf('month');

            self.events = [];

            var userLang = moment.locale();
            moment.locale("de");

            $scope.month = moment().format("MMMM");

            $rootScope.testFun = function () {
                alert("Coś tram");
            };



            self.initCalendar = function (start, end) {
                userGroupService.getUserClassDates($cookies.get("userId"), start, end)
                    .then(function (response) {
                        var classDates = response;
                        classDates.forEach(function (classDate) {
                            var event = {
                                id: classDate.id,
                                class: "event-info",
                                title : classDate.group.module.name
                                + " <br/>" + classDate.group.name
                                + "<br/> " + classDate.classRoom
                                + "<br/>" + moment(classDate.startDate).format("HH:mm")
                                + " - " +  moment(classDate.endDate).format("HH:mm"),

                                start : classDate.startDate,
                                end : classDate.endDate,
                                url: "#/class_dates/"+ classDate.id
                            };

                            self.events.push(event);
                        });

                        var calendar = $('#calendar').calendar({
                            tmpl_path: "bower_components/bootstrap-calendar/tmpls/",
                            events_source: self.events,
                            view: 'week',
                            day : self.startDate.format("YYYY-MM-DD"),
                        });
                    })
            };



            self.initCalendar(self.startDate, self.endDate);

            self.prevMonth = function () {
                self.events = [];
                self.startDate = moment(self.startDate).subtract(1, 'weeks').startOf('week');
                self.endDate = moment(self.endDate ).subtract(1, 'weeks').endOf('week');
                self.initCalendar(self.startDate, self.endDate);
            };

            self.nextMonth = function () {
                self.events = [];
                self.startDate = moment(self.startDate).add(1, 'weeks').startOf('week');
                self.endDate = moment(self.endDate ).add(1, 'weeks').endOf('week');
                self.initCalendar(self.startDate, self.endDate);
            }


        }]);