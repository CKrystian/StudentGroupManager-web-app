function TimetableController($scope, $element, $attrs) {
    var self = this;

    $scope.calendarView = 'week';
    $scope.viewDate = new Date();
    $scope.events = self.events;

}


angular.module('app').component('userTimetable', {
    templateUrl: 'js/components/userTimeTable.html',
    controller: TimetableController,
    bindings: {
        events: '='
    }
});