'use strict';

angular.module('app').service('userGroupService', function ($http, $q, $log) {

    var path = "http://localhost:9002/osmp-service/api/groups/";
    var user_path = "http://localhost:9002/osmp-service/api/user/";
    var classDate_path = "http://localhost:9002/osmp-service/api/groups/classDate/";
    var presence_path = "http://localhost:9002/osmp-service/api/groups/presence/";


    var ex_path = "http://localhost:9002/osmp-service/api/examines/";

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


        edit: function (id, name, module) {
            return $http({
                method : 'POST',
                url : path + 'update',
                responseType : "application/json",
                data : {
                    id : id,
                    name : name,
                    module : {
                        id:parseInt(module)
                    }
                }
            }).then(function (response) {
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
        },
        getGroup: function (id) {
            return $http(
                {
                    method: 'GET',
                    url: path + id,
                    responseType: "application/json"


                }).then(function (response) {
                    return response.data;
                }
            )

        },
        addExamineForm : function (minimum, maximum, minimumToPass, title, description, passDate) {
            return $http(
                {
                    method : 'POST',
                    url : ex_path + 'saveExamineForm',
                    responseType: "application/json",
                    data : {
                        minimum : minimum,
                        maximum : maximum,
                        minimumToPass : minimumToPass,
                        title : title,
                        description : description,
                        passDate : passDate
                    }
                }
            ).then(function (response) {
                return response.data;

            })
        },

        getUserClassDates : function (userId, startDate, endDate) {
            return $http(
                {
                    method: 'POST',
                    url: user_path + userId + "/classDates",
                    responseType: "application/json",
                    data: {
                        startDate : startDate,
                        endDate : endDate
                    }
                }
            ).then(function (response) {
                return response.data;

            })
        },

        getClassDate : function (id) {
            return $http(
                {
                    method: 'GET',
                    url: classDate_path + id,
                    responseType: "application/json"
                }
            ).then(function (response) {
                return response.data;

            })
        },
        addPresence : function (class_id, user_id) {
            return $http(
                {
                    method: 'POST',
                    url: presence_path,
                    responseType: "application/json",
                    data : {
                        classDate: {
                            id : class_id
                        },
                        user_id : user_id
                    }
                }
            ).then(function (response) {
                return response.data;

            })
        },
        removePresence : function (presence_id) {
            return $http(
                {
                    method: 'DELETE',
                    url: presence_path + presence_id + "/delete",
                    responseType: "application/json"
                }
            ).then(function (response) {
                return response.data;

            })
        },

        addInstance: function (score, exam_id, id ) {
            return $http(
                {
                    method : 'POST',
                    url : ex_path + 'instance/save',
                    responseType: "application/json",
                    data : {
                        score : score,
                        examineForm : {
                            id: exam_id
                        },
                        user : {
                            id : id
                        }
                    }
                }
            ).then(function (response) {
                return response.data;

            })

        },
        loadAllExamine : function () {
            return $http(
                {
                    method : 'GET',
                    url : ex_path,
                    responseType : "application/json"
                }
            ).then(function (response) {
                return response.data;

            })

        },
        getUserMarks : function (id) {
            return $http(
                {
                    method: 'GET',
                    url : ex_path + 'instance/' + id,
                    responseType : "application/json"
                }
            ).then(function (response) {
                return response.data;

            })

        }
    }
});