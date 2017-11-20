var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/users", {
            templateUrl : "users.html"
        })
        .when("/", {
            templateUrl : "main_panel.html"
        })
});
