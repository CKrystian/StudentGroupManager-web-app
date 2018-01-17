'use strict';

angular.module('app').service('groupService', function ($http, $q, $log) {

    var path = "http://localhost:9002/osmp-service/api/groups/save";
    //var resource = $resource(path,{});

    return {
        add: function(name,module) {
            return $http({
                method : 'POST',
                url : path,
                responseType : "application/json",
                data : {
                    name: name,
                    module: {
                        id:parseInt(module)
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