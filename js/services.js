'use strict';

//angular.module('Authentication', [])

    angular.module("app").service('AuthenticationService',
        ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout',
            function (Base64, $http, $cookieStore, $rootScope, $timeout) {
                var service = this;

                service.Login = function (username, password) {


                    // $timeout(function(){
                    //     var response = { success: username === 'test' && password === 'test' };
                    //     if(!response.success) {
                    //         response.message = 'Username or password is incorrect';
                    //     }
                    //     //callback(response);
                    // }, 1000);


                    /*----------------------------------------------*/
                    $http.post('http://localhost:9000/omsp-service/api/user/login', { username: 'test@prz.edu.pl', password: 'password' })
                       .success(function (response) {
                           callback(response);
                           alert("logowanie się powiodło");
                       }, function (error) {
                           alert("Błąd logowania")
                       });

                };

                service.SetCredentials = function (username, password) {
                    var authdata = Base64.encode(username + ':' + password);

                    $rootScope.globals = {
                        currentUser: {
                            username: username,
                            authdata: authdata
                        }
                    };

                    $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
                    $cookieStore.put('globals', $rootScope.globals);
                };

                service.ClearCredentials = function () {
                    $rootScope.globals = {};
                    $cookieStore.remove('globals');
                    $http.defaults.headers.common.Authorization = 'Basic ';
                };

                return service;
            }]);
