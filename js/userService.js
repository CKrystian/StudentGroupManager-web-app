'use strict';

angular.module('app').service('userService', function ($http, $q, $log) {

    var path = "http://localhost:9002/osmp-service/api/user/";
    //var resource = $resource(path,{});

    return {
        loadUsers: function(typ) {
            var test = path + typ;
            return $http({
                method : 'GET',
                url : path + typ,
                responseType : "application/json"
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