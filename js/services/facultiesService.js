'use strict';

angular.module('app').service('facultiesService', function ($http, $q, $log) {

    var path = "http://localhost:9002/osmp-service/api/faculty/";
    //var resource = $resource(path,{});

    return {
        loadFaculties: function(typ) {
            var test = path + typ;
            return $http({
                method : 'GET',
                url : path + typ,
                responseType : "application/json"
            }).then(function (response) {
                return response.data;
            })
        },
        delete: function (typ,id) {
            return $http({
                method : 'DELETE',
                url : path + typ + id,
                responseType : "application/json"
            }).then(function (response) {
                return response.data;
            })
        }
    }
});