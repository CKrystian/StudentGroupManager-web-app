'use strict';

angular.module('app').service('menuService', function ($http, $q, $log, $cookies) {

    var path = "http://localhost:9002/osmp-service/api/menuOptions/getContainers";


    return {

        loadMenu: function() {
            return $http({
                method: 'GET',
                url: path,
                responseType: "application/json",
                headers : {
                    'Authorization' : 'Basic ' + $cookies.get('credentials')
                }
            }).then(function (response) {
                return response.data;
            })
        }
    }
});