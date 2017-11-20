angular.controller('formCtrl', function($scope) {
    $scope.master = {firstName:"John", lastName:"Doe", Password:"xxx"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});

