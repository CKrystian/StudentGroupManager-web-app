'use strict';

angular.module('app').service('addUserService', function ($http, $q, $log) {

    var path = "http://localhost:9002/osmp-service/api/user/register";
    //var resource = $resource(path,{});

    return {
        add: function(email,firstName,lastName,password,enabled) {
            return $http({
                method : 'POST',
                url : path,
                responseType : "application/json",
                data : {
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    enabled: enabled
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                $log.error("Error during register " + error)
                //alert("error login in");
                return $q.reject("Registration Failed!");
            })
        }
    }
});