'use strict';

angular.module('app').service('modulesService', function ($http, $q, $log) {

    var path = "http://localhost:9002/osmp-service/api/modules/";
    //var resource = $resource(path,{});

    return {
        loadModules: function(typ) {
            var test = path + typ;
            return $http({
                method : 'GET',
                url : path + typ,
                responseType : "application/json"
            }).then(function (response) {
                return response.data;
            })
        }
    }
});