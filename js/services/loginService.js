'use strict';

angular.module('app').service('loginService', function ($http, $q, $log) {

    var path = "http://localhost:9002/osmp-service/api/user/login";
    //var resource = $resource(path,{});

    return {
        login: function(email, password) {
            return $http({
                method : 'POST',
                url : path,
                responseType : "application/json",
                data : {
                    email: email,
                    password: password
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                $log.error("Error during login in " + error)
                //alert("error login in");
                return $q.reject("User not found!");
            })
        }
    }
});