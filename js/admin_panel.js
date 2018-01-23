var app = angular.module("app", ["ngRoute", "ngMaterial", "ngCookies"]);
app.controller('DemoCtrl', function() {
    this.topDirections = ['left', 'up'];
    this.bottomDirections = ['down', 'right'];

    this.isOpen = false;

    this.availableModes = ['md-fling', 'md-scale'];
    this.selectedMode = 'md-fling';

    this.availableDirections = ['up', 'down', 'left', 'right'];
    this.selectedDirection = 'down';
});
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
        .when("/groups", {
            templateUrl : "groups.html"
        })
        .when("/usergroup", {
            templateUrl : "usergroup.html"
        })
        .when("/addUser", {
            templateUrl : "addUser.html"
        })
        .when("/profile", {
            templateUrl : "profile.html"
        })
        .when("/group_list", {
            templateUrl : "group_list.html"
        })
        .when("/class_dates/add", {
            templateUrl: "addClassDates.html"
    })
        .when("edit_faculty", {
            templateUrl : "edit_faculty.html"
        })
        .when("/class_dates/", {
            templateUrl: "userClassDates.html"
        })
        .when("/class_dates/:id", {
            templateUrl: "classDateDetails.html"
        })
    ;

});
