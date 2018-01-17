'use strict';

angular.module('app').service('userGroupService', function ($http, $q, $log) {

    var path = "http://localhost:9002/osmp-service/api/groups/";


    return {
        loadAllGroup: function(typ) {
            var test = path + typ;
            return $http({
                method: 'GET',
                url: path + typ,
                responseType: "application/json"
            }).then(function (response) {
                return response.data;
            })
        }
    }
});