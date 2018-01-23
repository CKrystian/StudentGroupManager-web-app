'use strict';

angular.module('app').service('userGroupService', function ($http, $q, $log) {

    var path = "http://localhost:9002/osmp-service/api/groups/";
    var user_path = "http://localhost:9002/osmp-service/api/user/";
   // var classDate_path = "http://localhost:9002/osmp-service/api/groups/addClassDate"


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
        },
        add: function (groupId, userId) {
            return $http(
                {
                    method: 'POST',
                    url: path + groupId + '/assigneeUser/' + userId,
                    responseType: "application/json",
                    data:{
                        groupId : groupId,
                        userId : userId
                    }
                }
            ).then(function (response) {
                return response.data;
                
            })
            
        },
        delete : function (typ,id) {
            return $http(
                {
                    method : 'DELETE',
                    url : path + typ + id,
                    responseType : "application/json"

                }
            ).then(function (response) {
                return response.data;

            })

        },

        getUserGroups : function (id) {
            return $http(
                {
                    method : 'GET',
                    url : user_path + id + "/groups",
                    responseType : "application/json"

                }
            ).then(function (response) {
                return response.data;

            })
        },

        saveClassDates : function (classDates) {
            return $http(
                {
                    method: 'POST',
                    url: path + "addClassDate",
                    responseType: "application/json",
                    data:classDates
                }
            ).then(function (response) {
                return response.data;

            })
        }
    }
});