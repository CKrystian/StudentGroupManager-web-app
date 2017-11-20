'use strict';

angular.module('app').service('registerService', function ($http, $q, $log) {

    var path = "http://localhost:9002/osmp-service/api/user/register";
    //var resource = $resource(path,{});

    return {
        register: function(email,firstName,lastName,password) {
            return $http({
                method : 'POST',
                url : path,
                responseType : "application/json",
                data : {
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName
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