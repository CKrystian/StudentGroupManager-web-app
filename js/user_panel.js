var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/marks_panel", {
            templateUrl : "marks_panel.html"
        })
        .when("/main_panel", {
            templateUrl : "main_panel.html"
        })
});
