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
        currentUser: function (id) {
            return $http (
                {
                    method : 'GET',
                    url : path + id,
                    responseType : "application/json"
                }
            ).then(function (response) {
                return response.data;
            })
            
        },
        editUser: function (id, email,firstName, lastName) {
            return  $http(
                {
                    method: 'POST',
                    url : path + 'update',
                    responseType : "application/json",
                    data : {
                        id : id,
                        email : email,
                        firstName: firstName,
                        lastName: lastName
                    }
                }
            ).then(function (response) {
                return response.data;

            })

        }
    }
});