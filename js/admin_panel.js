var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/users", {
            templateUrl : "users.html"
        })
        .when("/", {
            templateUrl : "main_panel.html"
        })
        .when("/module", {
            templateUrl : "module.html"
        })
        .when("/faculty", {
            templateUrl : "faculty.html"
        })
        .when("/faculties", {
            templateUrl : "faculties.html"
        })
        .when("/modules", {
            templateUrl : "modules.html"
        })

});
