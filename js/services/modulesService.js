'use strict';

angular.module('app').service('modulesService', function ($http, $q, $log) {

    var path = "http://localhost:9002/osmp-service/api/modules/";
    //var resource = $resource(path,{});

    return {
        loadModules: function(typ) {
            var test = path + typ;
            return $http({
                method: 'GET',
                url: path + typ,
                responseType: "application/json"
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
        },
        edit: function (id, name, faculty_id) {
            return $http({
                method: 'POST',
                url : path + 'update',
                responseType : "application/json",
                data : {
                    id : id,
                    name : name,
                    faculty_id : faculty_id
                }
            }).then(function (response) {
                return response.data;
            })

        }
    }
});