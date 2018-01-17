'use strict';

angular.module('app').service('moduleService', function ($http, $q, $log) {

    var path = "http://localhost:9002/osmp-service/api/modules/save";
    //var resource = $resource(path,{});

    return {
        add: function(name,faculty) {
            return $http({
                method : 'POST',
                url : path,
                responseType : "application/json",
                data : {
                    name: name,
                    faculty: {
                        id:parseInt(faculty)
                    }
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                $log.error("Error during insert " + error)
                //alert("error login in");
                return $q.reject("Inserting Failed!");
            })

        }
    }
});