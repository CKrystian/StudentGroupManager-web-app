var app = angular.module('app', ["ngRoute", "ngCookies", "ngMaterial", "ngMessages", "ngAnimate", "ngAria"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl : "login.html"
        })
        .when("/sign", {
            templateUrl : "sign.html"
        })
});
