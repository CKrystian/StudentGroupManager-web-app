var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "index.htm"
        })
        .when("/login", {
            templateUrl : "login.html"
        })
        .when("/sign", {
            templateUrl : "sign.html"
        })
});
