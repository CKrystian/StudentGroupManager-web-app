'use strict';

angular.module('app').service('facultyService', function ($http, $q, $log) {

    var path = "http://localhost:9002/osmp-service/api/faculty/save";
    //var resource = $resource(path,{});

    return {
        add: function(code,name,type) {
            return $http({
                method : 'POST',
                url : path,
                responseType : "application/json",
                data : {
                    code: code,
                    name: name,
                    type: type
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                //$log.error("Error during insert " + error)
                //alert("error login in");
                return $q.reject("Inserting Failed!");
            })
        }
    }
});